import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;

	constructor(
		private observer: BreakpointObserver,
		public authService: AuthService
	) { }

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		this.observer
			.observe(['(max-width: 800px)'])
			.pipe(delay(1))
			.subscribe((res) => {
				if (res.matches) {
					this.sidenav.mode = 'over';
					this.sidenav.close();
				} else {
					this.sidenav.mode = 'side';
					this.sidenav.open();
				}
			});
	}
}
