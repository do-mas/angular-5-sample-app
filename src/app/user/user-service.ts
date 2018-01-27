import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "./user.model";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    enter(userId: string) {
        return this.http.post(environment.urls.user, { userId : userId, name: ''});
    }

    getUserDetail(userId) {
        return this.http.get<User>(environment.urls.user + '/' + userId);
    }

}
