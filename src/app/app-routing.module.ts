import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./components/public/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./components/public/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'page-not-found',
		loadChildren: () => import('./components/public/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
