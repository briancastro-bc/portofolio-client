import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INotification } from 'src/app/models';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	notification: INotification = {
		title: '',
		description: '',
		picture: '',
		expiresIn: '',
		isVisible: true
	}

	notificationForm: FormGroup|any;

	constructor(private notificationService: NotificationService, private router: Router) { }

	ngOnInit(): void {
		this.notificationForm = new FormGroup({
			title: new FormControl(this.notification.title, [
				Validators.required,
				Validators.minLength(5),
			]),
			description: new FormControl(this.notification.description, [
				Validators.required,
			]),
			expiresIn: new FormControl(this.notification.expiresIn, [
				Validators.required
			])
		});
	}

	onSubmit(): void {
		this.notificationService.createNotification(this.notification)
			.subscribe(_ => this.router.navigate(['/']));
	}

	get title() { return this.notificationForm.get('title') }
	get description() { return this.notificationForm.get('description') }
	get expiresIn() { return this.notificationForm.get('expiresIn') }

}
