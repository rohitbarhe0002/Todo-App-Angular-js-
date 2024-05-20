import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { HttpService } from '../../../services/http.service';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [TaskListComponent, PageTitleComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css',
})
export class CompletedTasksComponent {
  taskList: any = [];
  dateNow = new Date();

  httpService = inject(HttpService);
  ngOnInit() {
    this.getAllTask();
  }

  getAllTask() {
    this.httpService.getAllTask().subscribe((res: any) => {
      this.taskList = res.filter((task: any) => !!task.complete);
    });
  }
  onComplete(task: any) {
    task.complete = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTask();
    });
  }
  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTask();
    });
  }
}
