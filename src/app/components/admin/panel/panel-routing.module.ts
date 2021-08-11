import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
	{
		path: '',
		component: PanelComponent,
		children: [
			{ 
				path: 'notifications', 
				loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) 
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PanelRoutingModule { }
