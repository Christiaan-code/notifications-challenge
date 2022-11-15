import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationItemComponent } from './components/notification-list/notification-item/notification-item.component';
import { UnreadDirective } from './directives/unread.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnreadDirective,
    NotificationListComponent,
    NotificationItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
