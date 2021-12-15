import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './components/shared/components/spinner/spinner.module';

//Our modules.
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { DesignModule } from './design.module';
import { NotificationModule } from './components/shared/components/notification/notification.module';

//Interceptors
import { ServerInterceptor } from 'src/app/interceptors';

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
		}),
		FormsModule,
		DesignModule,
		NavbarModule,
		SpinnerModule,
		NotificationModule,
	],
	providers: [
		//AuthService,
		//NotificationService,
		{
			provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
