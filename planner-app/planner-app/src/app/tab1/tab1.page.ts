import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {TasksService} from '../services/tasks.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tasks;
  constructor(private navCtrl: NavController, private taskService: TasksService) {
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit(): void {}

  addTask(){
    this.navCtrl.navigateForward('add-task');
  }
}
