import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/models';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	//User$ = this.authService.User$;
	user: IUser = JSON.parse(localStorage.getItem('user') || '{}');

	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;

	constructor(
		private observer: BreakpointObserver,
		public authService: AuthService
	) {
		
	}

	ngOnInit(): void {
		this.user;
	}

	ngAfterViewInit(): void {
		this.observer
			.observe(['(max-width: 800px)'])
			.pipe(delay(1))
			.subscribe((res) => {
				if (res.matches) {
					this.sidenav.mode = 'over';
					this.sidenav.close();
				} /*else {
					this.sidenav.mode = 'side';
					this.sidenav.open();
				}*/
			});
	}
}
