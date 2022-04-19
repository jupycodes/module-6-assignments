import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {TasksService} from "../../services/tasks.service";
import {GoalsService} from "../../services/goals.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  tasks;
  goals;
  constructor(private navCtrl: NavController, private taskService: TasksService, private goalService: GoalsService) {
    taskService.getCompleteTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
    goalService.getCompleteGoals().subscribe((results) => {
      this.goals = results;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
  }
  return() {
    this.navCtrl.navigateBack('/tabs/tab4');
  }

}
