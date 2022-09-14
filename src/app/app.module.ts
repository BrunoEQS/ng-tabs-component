import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TabsComponent, TabComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
