import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {AppComponent} from './app.component';
import {ROUTING} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgCircleProgressModule} from "ng-circle-progress";
import {AppState} from "./app-state";
import {Guard} from "./guard";
import {TokenInterceptor} from "../stub-backend/stub-backend";
import {StubStore} from "../stub-backend/stub-store";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SummaryComponent} from "./user/summary/summary.component";
import {UserService} from "./user/user-service";
import {TasksComponent} from "./user/tasks/tasks.component";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TasksComponent,
        SummaryComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ClarityModule,
        ReactiveFormsModule,
        HttpClientModule,
        ROUTING,
        NgCircleProgressModule.forRoot({
        })
    ],
    providers: [
        AppState,
        Guard,
        UserService,
        StubStore,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
