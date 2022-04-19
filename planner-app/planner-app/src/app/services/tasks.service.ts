import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Itask} from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }
  getTasks() {
    return this.httpClient.get<Itask[]>('http://localhost:3000/tasks');
  }
  getCompleteTasks(){
    return this.httpClient.get<Itask[]>('http://localhost:3000/complete_tasks');
  }
  createTask(formData: any) {
    return this.httpClient.post('http://localhost:3000/tasks', formData);
  }
  createCompleteTask(formData: any) {
    return this.httpClient.post('http://localhost:3000/complete_tasks', formData);
  }
  deleteTask(taskId) {
    return this.httpClient.delete(`http://localhost:3000/tasks/${taskId}`);
  }
}
