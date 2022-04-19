import {Component, Input, OnInit} from '@angular/core';
import {Itask} from "../../interfaces/itask";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-complete-tasks',
  templateUrl: './complete-tasks.component.html',
  styleUrls: ['./complete-tasks.component.scss'],
})
export class CompleteTasksComponent implements OnInit {
  @Input() task!: Itask;
  isShown = false;
  constructor(private taskService: TasksService) { }
  toggleContent(){
    this.isShown = !this.isShown;
  }
  ngOnInit() {}

}
