import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../../app-state";
import {TaskService} from "./tasks-service";
import {Task} from "./task.model";

@Component({
    styleUrls: ['./tasks.component.scss'],
    templateUrl: './tasks.component.html',
    providers: [TaskService]
})
export class TasksComponent implements OnInit {
    tasks: Task[] = [];
    fetchedTasks: Task[] = [];
    showStatus = 'ready';
    readyCount = '';
    inProgressCount = '';
    doneCount = '';
    allCount = '';

        constructor(private taskService: TaskService, private router: Router,
                private route: ActivatedRoute, private appState: AppState) {
    }

    ngOnInit(): void {
        this.showPromotionsList();
    }

    private showPromotionsList() {
        this.taskService.getTasks(this.appState.userId).subscribe((data) => {
            this.showTasks(data);
            this.setCounts();
        });
    }

    filter(status) {
        this.showStatus = status;
        this.showTasks(this.fetchedTasks);
    }

    showTasks(data) {
        this.setCounts();
        this.fetchedTasks = data;
        if (this.showStatus === 'all') {
            this.tasks = this.fetchedTasks;
            return
        }
        this.tasks = this.fetchedTasks.filter(task => task.status === this.showStatus);
    }

    private setCounts() {
        this.readyCount = this.fetchedTasks.filter(task => task.status === 'ready').length.toString();
        this.inProgressCount = this.fetchedTasks.filter(task => task.status === 'in-progress').length.toString();
        this.doneCount = this.fetchedTasks.filter(task => task.status === 'done').length.toString();
        this.allCount = this.fetchedTasks.length.toString();
    }
}
