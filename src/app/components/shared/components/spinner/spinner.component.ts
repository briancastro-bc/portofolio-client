import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
	selector: 'app-spinner',
	template: `
    <div class="overlay" *ngIf="this.spinnerService.isLoading$ | async">
		<div class="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<p>Loading..</p>
		</div>
	</div>
  `,
	styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

	constructor(public spinnerService: SpinnerService) { }

}
