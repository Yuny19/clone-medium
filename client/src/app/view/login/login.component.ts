import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { normalizeFlag } from '../../utils/form.util'
import { LoginService } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    title = "Sign in Mediyun";
    title2 = "No account ? ";
    title3 = "Create One";

    user: SocialUser;
    loggedIn: boolean;
    
    formLogin: FormGroup;


    constructor(private authService: AuthService,
        private loginService: LoginService,
        private formBuilder: FormBuilder,
        private router: Router
        ) {
        this.formLogin = formBuilder.group({
            idToken: new FormControl(null)
        });
    }

    ngOnInit() {

    }



    //to change title login and register
    setTitle() {
        if (this.title3 == "Create One") {
            this.title = "Join Mediyun";
            this.title2 = "Already have account ? ";
            this.title3 = "Sign in";
        } else if (this.title3 == "Sign in") {
            this.title = "Sign in Mediyun";
            this.title2 = "No account ? ";
            this.title3 = "Create One";
        }
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            this.saveUser(user);
        });
    }

    //save user to database
    saveUser(user: SocialUser) {
        this.formLogin.get('idToken').setValue(user.idToken);

        this.loginService.login(normalizeFlag(this.formLogin)).subscribe((result)=>{
            localStorage.setItem('name', result.name);
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('/story');
        });
    }

}