import {Component, Input, OnInit} from '@angular/core';
import {Igoal} from '../../interfaces/igoal';
import {GoalsService} from "../../services/goals.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {

  @Input() goal!: Igoal;
  isShown=false;
  constructor(private goalService: GoalsService, private toastCtrl: ToastController) { }
  toggleContent(){
    this.isShown = !this.isShown;
  }
  async completeGoal(goalId){
    await this.goalService.createCompleteGoal(this.goal).subscribe(() => {
    });
    await this.goalService.deleteGoal(goalId).subscribe(() => {
      console.log("goal deleted");
    });
    console.log("goal complete", goalId);
    const toast = await this.toastCtrl.create({
      message: 'Congratulations! This goal is complete.',
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }
  ngOnInit() {}

}
