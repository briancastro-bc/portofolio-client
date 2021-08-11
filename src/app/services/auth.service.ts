import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { IUser } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private UserSubject: Subject<IUser[]> = new Subject<IUser[]>();
	User$: Observable<IUser[]> = this.UserSubject.asObservable();

	constructor(private http: HttpClient, private router: Router, private message: ToastrService) {
		
	}

	public login(user: IUser): Observable<IUser> {
		return this.http.post<IUser|any>('api/signin', user)
			.pipe(
				filter(res => res && !!res),
				tap(
					(res) => {
						console.log(res);
						const { user } = res;
						this.message.success(res.message, 'Hecho');
						this.assignToken(res);
						this.UserSubject.next(user);
					}
				),
				catchError((err: HttpErrorResponse) => {
					this.message.error(err.error.message, 'Error');
					throw err;
				})
			);
	}

	public logout(): Observable<any> {
		return this.http.post<any>('api/logout', {})
			.pipe(
				filter(res => res && !!res),
				tap(
					res => console.log(res)
				),
				catchError((err: HttpErrorResponse) => {
					this.message.error(err.error.message, 'Error');
					throw err;
				})
			);
	}

	public removeSession(): void {
		sessionStorage.removeItem('token');
		localStorage.clear();
		this.logout();
		this.router.navigate(['/login']);
		this.message.success('La sessión ha sido cerrada correctamente', 'Hecho');
	}

	public assignToken(res: any): void {
		sessionStorage.setItem('token', res.token);
		localStorage.setItem('user', JSON.stringify(res.user));
		localStorage.setItem('response', JSON.stringify(res.response));
	}

	public hasToken(): boolean {
		return !!sessionStorage.getItem('token');
	}

	public verifyToken(): string|null {
		if(sessionStorage.getItem('token') != '' || null ) {
			return localStorage.getItem('user');
		}
		return null;
	}

}
