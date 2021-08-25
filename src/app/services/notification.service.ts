import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { catchError, filter, take, tap } from 'rxjs/operators';
import { INotification } from '../models';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	NotificationSubject: Subject<INotification[]> = new Subject<INotification[]>();
	Notifications$: Observable<INotification[]> = this.NotificationSubject.asObservable();

	constructor(
		private http: HttpClient,
		private message: ToastrService
		) {
			this.getNotifications().subscribe();
		}

	public getNotifications(): Observable<INotification[]> {
		return this.http.get<INotification[]|any>('api/notifications')
			.pipe(
				filter(res => res && !!res),
				tap(
					(res) => {
						console.log(res);
						const { notifications } = res;
						this.NotificationSubject.next(notifications);
					}
				),
				catchError((err: HttpErrorResponse) => {
					this.message.error(err.error.message, 'Error');
					throw err;
				})
			);
	}

	public createNotification(notification: INotification): Observable<INotification> {
		return this.http.post<INotification|any>('api/admin/notifications/create', notification)
			.pipe(
				filter(res => res && !!res),
				tap(
					(res) => {
						console.log(res);
						this.message.success(res.message, 'Hecho');
					}
				),
				catchError((err: HttpErrorResponse) => {
					this.message.error(err.error.message, 'Error');
					throw err;
				})
			);
	}
}
