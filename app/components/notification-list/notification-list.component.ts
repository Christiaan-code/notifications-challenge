import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {
  notifications = [1, 2, 3];
  unreads = 3;

  constructor() {}

  ngOnInit() {}
}
