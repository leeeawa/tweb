import type { AppMessagesManager } from "../../lib/appManagers/appMessagesManager";
import type { AppChatsManager } from "../../lib/appManagers/appChatsManager";
import type { AppPeersManager } from "../../lib/appManagers/appPeersManager";
import type { AppPollsManager, Poll } from "../../lib/appManagers/appPollsManager";
import type Chat from "./chat";
import { isTouchSupported } from "../../helpers/touchSupport";
import { attachClickEvent, cancelEvent, cancelSelection, findUpClassName } from "../../helpers/dom";
import ButtonMenu, { ButtonMenuItemOptions } from "../buttonMenu";
import { attachContextMenuListener, openBtnMenu, positionMenu } from "../misc";
import PopupDeleteMessages from "../popupDeleteMessages";
import PopupForward from "../popupForward";
import PopupPinMessage from "../popupUnpinMessage";
import { copyTextToClipboard } from "../../helpers/clipboard";

export default class ChatContextMenu {
  private buttons: (ButtonMenuItemOptions & {verify: () => boolean, notDirect?: () => boolean, withSelection?: true})[];
  private element: HTMLElement;

  private target: HTMLElement;
  private isTargetAGroupedItem: boolean;
  public peerId: number;
  public mid: number;

  constructor(private attachTo: HTMLElement, private chat: Chat, private appMessagesManager: AppMessagesManager, private appChatsManager: AppChatsManager, private appPeersManager: AppPeersManager, private appPollsManager: AppPollsManager) {
    const onContextMenu = (e: MouseEvent | Touch) => {
      if(this.init) {
        this.init();
        this.init = null;
      }

      let bubble: HTMLElement, bubbleContainer: HTMLElement;

      try {
        bubbleContainer = findUpClassName(e.target, 'bubble__container');
        bubble = bubbleContainer ? bubbleContainer.parentElement : findUpClassName(e.target, 'bubble');
      } catch(e) {}

      // ! context menu click by date bubble (there is no pointer-events)
      if(!bubble) return;

      if(e instanceof MouseEvent) e.preventDefault();
      if(this.element.classList.contains('active')) {
        return false;
      }
      if(e instanceof MouseEvent) e.cancelBubble = true;

      let mid = +bubble.dataset.mid;
      if(!mid) return;

      // * если открыть контекстное меню для альбома не по бабблу, и последний элемент не выбран, чтобы показать остальные пункты
      if(chat.selection.isSelecting && !bubbleContainer) {
        const mids = appMessagesManager.getMidsByMid(mid);
        if(mids.length > 1) {
          const selectedMid = chat.selection.selectedMids.has(mid) ? mid : mids.find(mid => chat.selection.selectedMids.has(mid));
          if(selectedMid) {
            mid = selectedMid;
          }
        }
      }

      this.peerId = this.chat.peerId;
      //this.msgID = msgID;
      this.target = e.target as HTMLElement;

      const groupedItem = findUpClassName(this.target, 'grouped-item');
      this.isTargetAGroupedItem = !!groupedItem;
      if(groupedItem) {
        this.mid = +groupedItem.dataset.mid;
      } else {
        this.mid = mid;
      }

      this.buttons.forEach(button => {
        let good: boolean;

        //if((appImManager.chatSelection.isSelecting && !button.withSelection) || (button.withSelection && !appImManager.chatSelection.isSelecting)) {
        if(chat.selection.isSelecting && !button.withSelection) {
          good = false;
        } else {
          good = bubbleContainer || isTouchSupported ? 
            button.verify() : 
            button.notDirect && button.verify() && button.notDirect();
        }

        button.element.classList.toggle('hide', !good);
      });

      const side: 'left' | 'right' = bubble.classList.contains('is-in') ? 'left' : 'right';
      //bubble.parentElement.append(this.element);
      //appImManager.log('contextmenu', e, bubble, side);
      positionMenu(e, this.element, side);
      openBtnMenu(this.element, () => {
        this.peerId = this.mid = 0;
        this.target = null;
      });
    };

    if(isTouchSupported) {
      attachClickEvent(attachTo, (e) => {
        if(chat.selection.isSelecting) {
          return;
        }

        const className = (e.target as HTMLElement).className;
        if(!className || !className.includes) return;

        chat.log('touchend', e);

        const good = ['bubble', 'bubble__container', 'message', 'time', 'inner'].find(c => className.match(new RegExp(c + '($|\\s)')));
        if(good) {
          cancelEvent(e);
          onContextMenu((e as TouchEvent).changedTouches[0]);
        }
      }, {listenerSetter: this.chat.bubbles.listenerSetter});

      attachContextMenuListener(attachTo, (e) => {
        if(chat.selection.isSelecting) return;

        // * these two lines will fix instant text selection on iOS Safari
        document.body.classList.add('no-select'); // * need no-select on body because chat-input transforms in channels
        attachTo.addEventListener('touchend', () => {
          document.body.classList.remove('no-select');
        }, {once: true});

        cancelSelection();
        //cancelEvent(e as any);
        const bubble = findUpClassName(e.target, 'grouped-item') || findUpClassName(e.target, 'bubble');
        if(bubble) {
          chat.selection.toggleByBubble(bubble);
        }
      }, this.chat.bubbles.listenerSetter);
    } else attachContextMenuListener(attachTo, onContextMenu, this.chat.bubbles.listenerSetter);
  }

  private init() {
    this.buttons = [{
      icon: 'reply',
      text: 'Reply',
      onClick: this.onReplyClick,
      verify: () => (this.peerId > 0 || this.appChatsManager.hasRights(-this.peerId, 'send')) && this.mid > 0 && !!this.chat.input.messageInput/* ,
      cancelEvent: true */
    }, {
      icon: 'edit',
      text: 'Edit',
      onClick: this.onEditClick,
      verify: () => this.appMessagesManager.canEditMessage(this.mid, 'text') && !!this.chat.input.messageInput
    }, {
      icon: 'copy',
      text: 'Copy',
      onClick: this.onCopyClick,
      verify: () => !!this.appMessagesManager.getMessage(this.mid).message
    }, {
      icon: 'copy',
      text: 'Copy selected',
      onClick: this.onCopyClick,
      verify: () => this.chat.selection.selectedMids.has(this.mid) && !![...this.chat.selection.selectedMids].find(mid => !!this.appMessagesManager.getMessage(mid).message),
      notDirect: () => true,
      withSelection: true
    }, {
      icon: 'pin',
      text: 'Pin',
      onClick: this.onPinClick,
      verify: () => {
        const message = this.appMessagesManager.getMessage(this.mid);
        return this.mid > 0 && message._ != 'messageService' && !message.pFlags.pinned && this.appPeersManager.canPinMessage(this.peerId);
      }
    }, {
      icon: 'unpin',
      text: 'Unpin',
      onClick: this.onUnpinClick,
      verify: () => {
        const message = this.appMessagesManager.getMessage(this.mid);
        return message.pFlags.pinned && this.appPeersManager.canPinMessage(this.peerId);
      }
    }, {
      icon: 'revote',
      text: 'Revote',
      onClick: this.onRetractVote,
      verify: () => {
        const message = this.appMessagesManager.getMessage(this.mid);
        const poll = message.media?.poll as Poll;
        return poll && poll.chosenIndexes.length && !poll.pFlags.closed && !poll.pFlags.quiz;
      }/* ,
      cancelEvent: true */
    }, {
      icon: 'stop',
      text: 'Stop poll',
      onClick: this.onStopPoll,
      verify: () => {
        const message = this.appMessagesManager.getMessage(this.mid);
        const poll = message.media?.poll;
        return this.appMessagesManager.canEditMessage(this.mid, 'poll') && poll && !poll.pFlags.closed && this.mid > 0;
      }/* ,
      cancelEvent: true */
    }, {
      icon: 'forward',
      text: 'Forward',
      onClick: this.onForwardClick,
      verify: () => this.mid > 0
    }, {
      icon: 'forward',
      text: 'Forward selected',
      onClick: this.onForwardClick,
      verify: () => this.chat.selection.selectedMids.has(this.mid) && !this.chat.selection.selectionForwardBtn.hasAttribute('disabled'),
      notDirect: () => true,
      withSelection: true
    }, {
      icon: 'select',
      text: 'Select',
      onClick: this.onSelectClick,
      verify: () => {
        const message = this.appMessagesManager.getMessage(this.mid);
        return !message.action && !this.chat.selection.selectedMids.has(this.mid);
      },
      notDirect: () => true,
      withSelection: true
    }, {
      icon: 'select',
      text: 'Clear selection',
      onClick: this.onClearSelectionClick,
      verify: () => this.chat.selection.selectedMids.has(this.mid),
      notDirect: () => true,
      withSelection: true
    }, {
      icon: 'delete danger',
      text: 'Delete',
      onClick: this.onDeleteClick,
      verify: () => this.appMessagesManager.canDeleteMessage(this.mid)
    }, {
      icon: 'delete danger',
      text: 'Delete selected',
      onClick: this.onDeleteClick,
      verify: () => this.chat.selection.selectedMids.has(this.mid) && !this.chat.selection.selectionDeleteBtn.hasAttribute('disabled'),
      notDirect: () => true,
      withSelection: true
    }];

    this.element = ButtonMenu(this.buttons, this.chat.bubbles.listenerSetter);
    this.element.id = 'bubble-contextmenu';
    this.chat.container.append(this.element);
  };

  private onReplyClick = () => {
    const message = this.appMessagesManager.getMessage(this.mid);
    const chatInputC = this.chat.input;
    const f = () => {
      chatInputC.setTopInfo('reply', f, this.appPeersManager.getPeerTitle(message.fromId, true), message.message, undefined, message);
      chatInputC.replyToMsgId = this.mid;
    };
    f();
  };

  private onEditClick = () => {
    this.chat.input.initMessageEditing(this.mid);
  };

  private onCopyClick = () => {
    const mids = this.chat.selection.isSelecting ? [...this.chat.selection.selectedMids] : [this.mid];
    const str = mids.reduce((acc, mid) => {
      const message = this.appMessagesManager.getMessage(mid);
      return acc + (message?.message ? message.message + '\n' : '');
    }, '').trim();
    
    copyTextToClipboard(str);
  };

  private onPinClick = () => {
    new PopupPinMessage(this.peerId, this.mid);
  };

  private onUnpinClick = () => {
    new PopupPinMessage(this.peerId, this.mid, true);
  };

  private onRetractVote = () => {
    this.appPollsManager.sendVote(this.mid, []);
  };

  private onStopPoll = () => {
    this.appPollsManager.stopPoll(this.mid);
  };

  private onForwardClick = () => {
    if(this.chat.selection.isSelecting) {
      this.chat.selection.selectionForwardBtn.click();
    } else {
      new PopupForward(this.isTargetAGroupedItem ? [this.mid] : this.appMessagesManager.getMidsByMid(this.mid));
    }
  };

  private onSelectClick = () => {
    this.chat.selection.toggleByBubble(findUpClassName(this.target, 'grouped-item') || findUpClassName(this.target, 'bubble'));
  };

  private onClearSelectionClick = () => {
    this.chat.selection.cancelSelection();
  };

  private onDeleteClick = () => {
    if(this.chat.selection.isSelecting) {
      this.chat.selection.selectionDeleteBtn.click();
    } else {
      new PopupDeleteMessages(this.isTargetAGroupedItem ? [this.mid] : this.appMessagesManager.getMidsByMid(this.mid));
    }
  };
}