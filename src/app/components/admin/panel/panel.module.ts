import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DesignModule } from 'src/app/design.module';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    DesignModule
  ]
})
export class PanelModule { }
