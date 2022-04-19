import {Component, Input, OnInit} from '@angular/core';
import {Igoal} from "../../interfaces/igoal";
import {GoalsService} from "../../services/goals.service";

@Component({
  selector: 'app-complete-goals',
  templateUrl: './complete-goals.component.html',
  styleUrls: ['./complete-goals.component.scss'],
})
export class CompleteGoalsComponent implements OnInit {
  @Input() goal!: Igoal;
  isShown=false;
  constructor(private goalService: GoalsService) { }
  toggleContent(){
    this.isShown = !this.isShown;
  }
  ngOnInit() {}

}
