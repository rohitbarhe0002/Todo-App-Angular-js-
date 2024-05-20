import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpClient = inject(HttpClient);
  constructor() {}
  addTasks(task: string) {
    console.log(task, 'task is dhere');
    return this.httpClient.post('http://localhost:3000/tasks', {
      title: task,
    });
  }
  getAllTask() {
    return this.httpClient.get('http://localhost:3000/tasks/');
  }
  updateTask(task:any) {
    return this.httpClient.put('http://localhost:3000/tasks/'+task.id,task);
  }
}
