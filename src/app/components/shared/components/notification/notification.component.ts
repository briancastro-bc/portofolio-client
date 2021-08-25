import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { INotification } from 'src/app/models';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

	Notifications$ = this.notificationService.Notifications$;

	constructor(public notificationService: NotificationService) { }

	ngOnInit(): void {
		//this.Notifications$.subscribe();
	}

	ngOnDestroy(): void {
		
	}
}
