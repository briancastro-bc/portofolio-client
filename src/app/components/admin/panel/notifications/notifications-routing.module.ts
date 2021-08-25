import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [
	{
		path: '',
		component: NotificationsComponent
	},
	{ 
		path: 'create', 
		loadChildren: () => import('./create/create.module').then(m => m.CreateModule) 
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NotificationsRoutingModule { }
