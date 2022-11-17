import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../notification.service';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css'],
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: Notification;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  @HostListener('click') mouseclick(eventData: Event) {
    this.notification.unread = false;
    this.notificationService.$notificationRead.next();
  }
}
