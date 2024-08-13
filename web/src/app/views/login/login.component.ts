import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    get formControls() { return this.loginForm.controls; }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router    
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        // Initialization code here
    }


    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        const loginData = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };

        console.log('Login data:', loginData);
        this.router.navigate(['/vote']);

    }

}
