import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { IUser } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: IUser = {
		username: '',
		password: ''
	}

	loginForm: FormGroup | any;
	
	constructor(private authService: AuthService, private router: Router) {  }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(this.user.username, [
				Validators.required,
				Validators.maxLength(30),
				Validators.minLength(2)
			]),
			password: new FormControl(this.user.password, [
				Validators.required,
				Validators.minLength(8)
			])
		});
	}

	public loginUser(): void {
		this.authService.login(this.user).subscribe(
			_ => this.router.navigate(['/'])
		);
	}

	get username() { return this.loginForm.get('username') }
	get password() { return this.loginForm.get('password') }

}
