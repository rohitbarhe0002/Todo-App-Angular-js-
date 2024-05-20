import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css',
})
export class AllTasksComponent {
  newTask = '';
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
    console.log('called');
    this.httpService.getAllTask().subscribe((res) => {
      this.taskList = res;
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

  search(searchTerm: any) {
  console.log("called",searchTerm)
  }
}
