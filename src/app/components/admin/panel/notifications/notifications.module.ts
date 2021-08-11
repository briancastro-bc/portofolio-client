import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { DesignModule } from 'src/app/design.module';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    DesignModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NotificationsModule { }
