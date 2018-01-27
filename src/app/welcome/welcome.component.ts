import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../app-state";

@Component({
    styleUrls: ['./welcome.component.scss'],
    templateUrl: './welcome.component.html',
    providers: [UserService]
})
export class WelcomeComponent {

    enterForm = new FormGroup({
        userId: new FormControl('', Validators.required),
    });
    submitted = false;
    showError = false;

    constructor(private customerService: UserService,
                private route: ActivatedRoute,
                private router: Router, private appState: AppState) {
    }

    onSubmit() {

        const userId = this.enterForm.get('userId').value;

        this.customerService.enter(userId).subscribe(() => {
            this.appState.userId = userId;

            this.router.navigate([`../${userId}/summary`], {relativeTo: this.route});
        }, () => {
            this.showError = true;
        });

    }

}
