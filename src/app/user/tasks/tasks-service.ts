import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {}

    getTasks(userId: string): any {
        return this.http.get(environment.urls.tasks + '/' + userId);
    }

    finishTask(userId: string, taskId: string): any {
        const request = { userId: userId, taskId: taskId };
        return this.http.post(environment.urls.tasks + '/' + taskId, request);
    }

}
