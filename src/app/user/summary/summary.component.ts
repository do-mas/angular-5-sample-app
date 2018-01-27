import {Component, OnInit} from '@angular/core';
import {UserService} from "../user-service";
import {AppState} from "../../app-state";

@Component({
    styleUrls: ['./summary.component.scss'],
    templateUrl: './summary.component.html',
    providers: [UserService]
})
export class SummaryComponent implements OnInit {
    user: any;

    constructor(private userService: UserService,
                private appState: AppState) {
    }

    ngOnInit(): void {
        this.fetchUserDetails();
    }

    private fetchUserDetails() {
        this.userService.getUserDetail(this.appState.userId).subscribe((user) => {
            this.user = user;
        });
    }

}
