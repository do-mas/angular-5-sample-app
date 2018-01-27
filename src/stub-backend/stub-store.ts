import {Injectable} from "@angular/core";
import {User} from "../app/user/user.model";
import {Task} from "../app/user/tasks/task.model";

@Injectable()
export class StubStore {

    user: User;
    task: Task[];

    constructor() {
    }

    enterApp(customerId) {
        this.user = {userId: customerId, name: 'John Smith'}
    }

    getUser(): User {
        return {userId: '123', name: 'John Smith'};
    }

    getTasks(): Task[]  {

        return [
            {
                taskId: '1',
                title: 'Task no 1',
                userId: '123',
                status: 'ready',
                size: 'small',
                description: 'decsription 1',
            },
            {
                taskId: '2',
                title: 'Task no 2',
                userId: '123',
                status: 'in-progress',
                size: 'large',
                description: 'decsription 2',
            },
            {
                taskId: '3',
                title: 'Task no 3',
                userId: '123',
                status: 'done',
                size: 'medium',
                description: 'decsription 3',
            },
            {
                taskId: '4',
                title: 'Task no 4',
                userId: '123',
                status: 'done',
                size: 'medium',
                description: 'decsription 4',
            }
        ];
    }

}
