import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class NotLoggedInGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router, private message: ToastrService) { }

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if(this.authService.hasToken()) return true;
		this.router.navigate(['/']);
		this.message.error('Por favor inicia sesión', 'Error');
		return false;
	}

}
