import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Igoal} from '../interfaces/igoal';
import {Itask} from "../interfaces/itask";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private httpClient: HttpClient) { }
  getGoals() {
    return this.httpClient.get<Igoal[]>('http://localhost:3000/goals');
  }
  getCompleteGoals(){
    return this.httpClient.get<Igoal[]>('http://localhost:3000/complete_goals');
  }
  createGoal(formData: any) {
    return this.httpClient.post('http://localhost:3000/goals', formData);
  }
  createCompleteGoal(formData: any) {
    return this.httpClient.post('http://localhost:3000/complete_goals', formData);
  }
  deleteGoal(goalId) {
    return this.httpClient.delete(`http://localhost:3000/goals/${goalId}`);
  }
}
