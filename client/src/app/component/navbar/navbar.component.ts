import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';

@Component({
    selector: 'navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    name: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.name = window.localStorage.getItem('name')
    }

    signOut(): void {
        this.authService.signOut();
    }

}