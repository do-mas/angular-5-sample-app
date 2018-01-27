import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {Routes, RouterModule} from '@angular/router';

import {Guard} from "./guard";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SummaryComponent} from "./user/summary/summary.component";
import {TasksComponent} from "./user/tasks/tasks.component";


export const ROUTES: Routes = [

    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {
        path: ':userId',
        canActivate: [Guard],
        children: [
            {path: 'summary', component: SummaryComponent},
            {path: 'tasks', component: TasksComponent},
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
