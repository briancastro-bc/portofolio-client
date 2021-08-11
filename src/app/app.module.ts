import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './components/shared/components/spinner/spinner.module';

//Our modules.
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { DesignModule } from './design.module';
import { NotificationModule } from './components/shared/components/notification/notification.module';

//Interceptors
import { ApiInterceptor, TokenInterceptor, SpinnerInterceptor } from 'src/app/interceptors';

//Services
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		DesignModule,
		NavbarModule,
		SpinnerModule,
		NotificationModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000'
		}),
		ToastrModule.forRoot({
			closeButton: true,
			maxOpened: 3,
			preventDuplicates: true,
			resetTimeoutOnDuplicate: true,
			progressBar: true,
			positionClass: 'toast-bottom-left'
		})
	],
	providers: [
		AuthService,
		NotificationService,
		{
			provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
		},
		{
			provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
		},
		{
			provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
