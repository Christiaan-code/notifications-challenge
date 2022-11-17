import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit, OnDestroy {
  notifications: Notification[] = []
  
  private unreads: number;
  private readsSub: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.readsSub = this.notificationService.$notificationRead.subscribe(() => {
      this.updateReads()
    })
    this.updateReads()
  }

  ngOnDestroy() {
    this.readsSub.unsubscribe()
  }

  markAllAsRead() {
    this.notifications.forEach((notification) => (notification.unread = false));
    this.updateReads()
  }

  updateReads() {
    this.notifications = this.notificationService.notifications
    this.unreads = this.notifications.filter((item) => item.unread).length;
  }
}
