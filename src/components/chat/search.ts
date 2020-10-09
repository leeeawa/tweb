import appImManager from "../../lib/appManagers/appImManager";
import $rootScope from "../../lib/rootScope";
import { cancelEvent, whichChild, findUpTag } from "../../lib/utils";
import AppSearch, { SearchGroup } from "../appSearch";
import PopupDatePicker from "../popupDatepicker";
import { ripple } from "../ripple";
import SearchInput from "../searchInput";

export class ChatSearch {
  private element: HTMLElement;
  private backBtn: HTMLElement;
  private searchInput: SearchInput;

  private results: HTMLElement;

  private footer: HTMLElement;
  private dateBtn: HTMLElement;
  private foundCountEl: HTMLElement;
  private controls: HTMLElement;
  private downBtn: HTMLElement;
  private upBtn: HTMLElement;

  private appSearch: AppSearch;
  private searchGroup: SearchGroup;

  private foundCount = 0;
  private selectedIndex = 0;
  private setPeerPromise: Promise<any>;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('sidebar-header', 'chat-search', 'chats-container');

    this.backBtn = document.createElement('button');
    this.backBtn.classList.add('btn-icon', 'tgico-back', 'sidebar-close-button');
    ripple(this.backBtn);
    
    this.backBtn.addEventListener('click', () => {
      appImManager.topbar.classList.remove('hide-pinned');
      this.element.remove();
      this.searchInput.remove();
      this.results.remove();
      this.footer.remove();
      this.footer.removeEventListener('click', this.onFooterClick);
      this.dateBtn.removeEventListener('click', this.onDateClick);
      this.upBtn.removeEventListener('click', this.onUpClick);
      this.downBtn.removeEventListener('click', this.onDownClick);
      this.searchGroup.list.removeEventListener('click', this.onResultsClick);
      appImManager.bubblesContainer.classList.remove('search-results-active');
    }, {once: true});

    this.searchInput = new SearchInput('Search');
    
    // Results
    this.results = document.createElement('div');
    this.results.classList.add('chat-search-results', 'chats-container');

    this.searchGroup = new SearchGroup('', 'messages', undefined, '', false);
    this.searchGroup.list.addEventListener('click', this.onResultsClick);

    this.appSearch = new AppSearch(this.results, this.searchInput, {
      messages: this.searchGroup
    }, (count) => {
      this.foundCount = count;

      if(!this.foundCount) {
        this.foundCountEl.innerText = this.searchInput.value ? 'No results' : '';
        this.results.classList.remove('active');
        appImManager.bubblesContainer.classList.remove('search-results-active');
        this.upBtn.setAttribute('disabled', 'true');
        this.downBtn.setAttribute('disabled', 'true');
      } else {
        this.selectResult(this.searchGroup.list.children[0] as HTMLElement);
      }
    });
    this.appSearch.beginSearch($rootScope.selectedPeerID);

    //appImManager.topbar.parentElement.insertBefore(this.results, appImManager.bubblesContainer);
    appImManager.bubblesContainer.append(this.results);

    // Footer
    this.footer = document.createElement('div');
    this.footer.classList.add('chat-search-footer');

    this.footer.addEventListener('click', this.onFooterClick);
    ripple(this.footer);

    this.foundCountEl = document.createElement('span');
    this.foundCountEl.classList.add('chat-search-count');

    this.dateBtn = document.createElement('button');
    this.dateBtn.classList.add('btn-icon', 'tgico-calendar');

    this.controls = document.createElement('div');
    this.controls.classList.add('chat-search-controls');

    this.upBtn = document.createElement('button');
    this.upBtn.classList.add('btn-icon', 'tgico-up');
    this.downBtn = document.createElement('button');
    this.downBtn.classList.add('btn-icon', 'tgico-down');

    this.upBtn.setAttribute('disabled', 'true');
    this.downBtn.setAttribute('disabled', 'true');

    this.dateBtn.addEventListener('click', this.onDateClick);
    this.upBtn.addEventListener('click', this.onUpClick);
    this.downBtn.addEventListener('click', this.onDownClick);
    this.controls.append(this.upBtn, this.downBtn);

    this.footer.append(this.foundCountEl, this.dateBtn, this.controls);
    
    appImManager.topbar.parentElement.insertBefore(this.footer, appImManager.chatInput);

    // Append container
    this.element.append(this.backBtn, this.searchInput.container);

    appImManager.topbar.classList.add('hide-pinned');
    appImManager.topbar.parentElement.append(this.element);

    this.searchInput.input.focus();
  }

  onDateClick = (e: MouseEvent) => {
    cancelEvent(e);
    new PopupDatePicker(new Date(), appImManager.onDatePick).show();
  };

  selectResult = (elem: HTMLElement) => {
    if(this.setPeerPromise) return this.setPeerPromise;

    const peerID = +elem.getAttribute('data-peerID');
    const lastMsgID = +elem.dataset.mid || undefined;

    const index = whichChild(elem);

    if(index == (this.foundCount - 1)) {
      this.upBtn.setAttribute('disabled', 'true');
    } else {
      this.upBtn.removeAttribute('disabled');
    }

    if(!index) {
      this.downBtn.setAttribute('disabled', 'true');
    } else {
      this.downBtn.removeAttribute('disabled');
    }

    this.results.classList.remove('active');
    appImManager.bubblesContainer.classList.remove('search-results-active');

    const res = appImManager.setPeer(peerID, lastMsgID);
    this.setPeerPromise = (res instanceof Promise ? res : Promise.resolve(res)).then(() => {
      this.selectedIndex = index;
      this.foundCountEl.innerText = `${index + 1} of ${this.foundCount}`;

      const renderedCount = this.searchGroup.list.childElementCount;
      if(this.selectedIndex >= (renderedCount - 6)) {
        this.appSearch.searchMore();
      }
    }).finally(() => {
      this.setPeerPromise = null;
    });
  };

  onResultsClick = (e: MouseEvent) => {
    const target = findUpTag(e.target, 'LI');
    if(target) {
      this.selectResult(target);
    }
  };

  onFooterClick = (e: MouseEvent) => {
    if(this.foundCount) {
      appImManager.bubblesContainer.classList.toggle('search-results-active');
      this.results.classList.toggle('active');
    }
  };

  onUpClick = (e: MouseEvent) => {
    cancelEvent(e);
    this.selectResult(this.searchGroup.list.children[this.selectedIndex + 1] as HTMLElement);
  };

  onDownClick = (e: MouseEvent) => {
    cancelEvent(e);
    this.selectResult(this.searchGroup.list.children[this.selectedIndex - 1] as HTMLElement);
  };
}