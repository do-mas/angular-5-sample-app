import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppState} from "./app-state";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router,
                private appState: AppState) {
    }

    isWelcomeScreen(): boolean {
        return this.router.url === '/welcome' || this.router.url === '/';
    }

    getModelUrl(model) {
        return this.appState.userId + '/' + model;
    }

    getUserId() {
        return this.appState.userId;
    }

}
