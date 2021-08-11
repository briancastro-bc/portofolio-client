import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { INotification } from 'src/app/models';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

	Notifications$: Observable<INotification[]> = this.notificationService.Notifications$;

	notification: INotification = {
		title: '',
		description: '',
		isVisible: true,
		expiresIn: '',
		picture: ''
	}

	notificationForm!: FormGroup;

	constructor(
		private notificationService: NotificationService,
		private rotuer: Router
	) { }

	ngOnInit(): void {
		this.notificationForm = new FormGroup({
			title: new FormControl(this.notification.title, [
				Validators.required,
				Validators.maxLength(20),
				Validators.minLength(2)
			]),
			description: new FormControl(this.notification.description, [
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(200)
			])
		});
	}

	onSubmit(): void {

	}

	get title() {
		return this.notificationForm.get('title')
	}
	get description() {
		return this.notificationForm.get('description')
	}

}
