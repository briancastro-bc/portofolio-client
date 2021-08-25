import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

	Notifications$ = this.notificationService.Notifications$;

	constructor(private notificationService: NotificationService) { }

	ngOnInit(): void {
		this.notificationService.getNotifications().subscribe();
	}
}
