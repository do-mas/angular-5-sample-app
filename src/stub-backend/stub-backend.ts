import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from "../environments/environment";
import {StubStore} from "./stub-store";
import {User} from "../app/user/user.model";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private stubStore: StubStore) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (environment.stubBackend) {

            // user
            if (request.url.endsWith('/user') && request.method === 'POST') {
                return Observable.of(new HttpResponse({status: 200, body: {}}));
            } else if (request.url.indexOf('/user') > -1 && request.method === 'GET') {
                const user = this.stubStore.getUser();
                return Observable.of(new HttpResponse<User>({
                    status: 200,
                    body: user
                }));
            }

            // tasks
            if (request.url.endsWith('/tasks') && request.method === 'POST') {
                return Observable.of(new HttpResponse({status: 200, body: {}}));
            } else if (request.url.indexOf('/tasks') > -1 && request.method === 'GET') {
                const tasks = this.stubStore.getTasks();
                return Observable.of(new HttpResponse<any[]>({
                    status: 200,
                    body: tasks
                }));
            }

        }

        return next.handle(request);

    }
}
