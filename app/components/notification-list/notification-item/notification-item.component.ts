import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css'],
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: Notification;

  constructor() {}

  ngOnInit() {}

  @HostListener('click') mouseclick(eventData: Event) {
    this.notification.unread = false;
  }
}
