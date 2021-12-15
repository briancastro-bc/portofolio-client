import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SpinnerService } from 'src/app/services/spinner.service';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  private readonly serverUrl: string = environment.baseUrl;

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.showSpinner();
    const req: HttpRequest<any> = request.clone({
      url: `${this.serverUrl}/${request.url}`,
      withCredentials: true,
      setHeaders: {
        Authorization: `Bearer`
      }
    });
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.hideSpinner())
    );
  }
}
