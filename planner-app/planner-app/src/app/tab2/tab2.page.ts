import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {GoalsService} from '../services/goals.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  goals;
  constructor( private navCtrl: NavController, private goalService: GoalsService) {
    goalService.getGoals().subscribe((results) => {
      this.goals = results;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit(): void {}
  addGoal(){
    this.navCtrl.navigateForward('add-goal');
  }

}
