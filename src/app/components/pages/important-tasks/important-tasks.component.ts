import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-important-tasks',
  standalone: true,
  imports: [TaskListComponent,PageTitleComponent],
  templateUrl: './important-tasks.component.html',
  styleUrl: './important-tasks.component.css'
})
export class ImportantTasksComponent { newTask = '';
taskList: any = [];
dateNow = new Date();

httpService = inject(HttpService);
ngOnInit() {
  this.getAllTask();
}
addTask() {
  this.httpService.addTasks(this.newTask).subscribe(() => {
    this.httpService.getAllTask().subscribe((res) => {
      this.taskList = res;
    });
    this.newTask = '';
  });
}
getAllTask() {
  this.httpService.getAllTask().subscribe((res:any) => {
    this.taskList = res.filter((task:any) => !!task.important);
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
