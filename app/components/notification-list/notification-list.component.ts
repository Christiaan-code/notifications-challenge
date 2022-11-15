import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [
    new Notification(
      'https://en.meming.world/images/en/thumb/8/85/Kid_Mike_Wazowski.jpg/300px-Kid_Mike_Wazowski.jpg',
      'Mark Webber',
      'reacted to your recent post',
      '1m ago',
      true,
      'My first tournament today!'
    ),
    new Notification(
      'https://i.pinimg.com/564x/f0/03/3f/f0033f17d8b85d5c493d1a2cab723cb1.jpg',
      'Angela Gray',
      'followed you',
      '5m ago',
      true
    ),
    new Notification(
      'https://www.pngitem.com/pimgs/m/521-5211656_cute-cartoon-characters-boy-hd-png-download.png',
      'Jacob Thompson',
      'has joined your group',
      '1 day ago',
      true,
      'Chess Club'
    ),
    new Notification(
      'https://images.saymedia-content.com/.image/t_share/MTc1MTE0Mzc1NDU0MDA5MTU2/hottest-male-disney-characters.jpg',
      'Rizky Hasanuddin',
      'sent you a private message',
      '5 days ago',
      false
    ),
    new Notification(
      'https://qph.cf2.quoracdn.net/main-qimg-76c04581dc5d02224976a5ec24618d01.webp',
      'Kimberly Smith',
      'commented on your picture',
      '1 week ago',
      false
    ),
    new Notification(
      'https://img.buzzfeed.com/buzzfeed-static/static/2022-05/5/23/campaign_images/43f77d5663e3/33-cartoon-characters-who-are-extremely-attractiv-2-678-1651791693-0_dblbig.jpg',
      'Nathan Peterson',
      'commented on your picture',
      '2 weeks ago',
      false,
      '5 end-game strategies to increase your win rate'
    ),
    new Notification(
      'https://mlpforums.com/uploads/post_images/img-3425485-1-agnes.jpg',
      'Anna Kim',
      'commented on your picture',
      '2 weeks ago',
      false,
      'Chess Club'
    ),
  ];
  private unreads = this.notifications.filter((item) => item.unread).length;
  private readsSub = Subscription;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  markAllAsRead() {
    this.notifications.forEach((notification) => (notification.unread = false));
  }
}
