import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "./user/user-service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {AppState} from "./app-state";

@Injectable()
export class Guard implements CanActivate {

    constructor(private userService: UserService, private appState: AppState) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.userService.getUserDetail(route.params.userId)
            .map(() => {
                this.appState.userId = route.params.userId;
                return true;
            }).catch(() => {
                return Observable.of(false);
            });
    }


}
