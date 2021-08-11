import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { DesignModule } from 'src/app/design.module';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { NotificationModule } from '../components/notification/notification.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignModule,
    SpinnerModule,
    NotificationModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
