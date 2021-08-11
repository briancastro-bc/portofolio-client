import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

	@ViewChild(MatSidenav)
	panelSidenav!: MatSidenav;

	constructor(private observer: BreakpointObserver) { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.observer
			.observe(['(max-width: 800px)'])
			.pipe(delay(1))
			.subscribe((res) => {
				this.panelSidenav.mode = 'side';
				this.panelSidenav.open();
				this.panelSidenav.position = "end";
			});
	}

}
