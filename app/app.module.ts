import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationItemComponent } from './components/notification-list/notification-item/notification-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    NotificationItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
