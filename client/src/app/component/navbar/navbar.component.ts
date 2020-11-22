import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
    selector: 'navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    name: string;

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.name = localStorage.getItem('name')
    }

    signOut(): void {
        this.authService.signOut();
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

}