import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() arrowDirection: string = '';
  @Input() tabsDirection: string = 'horizontal';
  tabsClass: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }

    switch (this.tabsDirection) {
      case 'horizontal':
        this.tabsClass = 'horizontal';
        break;
      case 'vertical':
        this.tabsClass = 'vertical';
        break;
      default:
        this.tabsClass = 'horizontal';
    }
    return this.tabsClass;
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
