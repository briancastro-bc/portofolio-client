import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { DesignModule } from 'src/app/design.module';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    DesignModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
