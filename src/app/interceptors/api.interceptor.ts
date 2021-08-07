import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

	private readonly BASE_URL: string = environment.BASE_URL;

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const requestURL = request.clone({
			url: `${this.BASE_URL}/${request.url}`,
			withCredentials: true
		});
		return next.handle(requestURL);
	}
}
