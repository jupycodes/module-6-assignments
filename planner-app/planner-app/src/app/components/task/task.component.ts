import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../interfaces/itask';
import {ToastController} from '@ionic/angular';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task!: Itask;
  isShown = false;
  constructor(private toastCtrl: ToastController, private taskService: TasksService) { }
  toggleContent(){
    this.isShown = !this.isShown;
  }
  async completeTask(taskId){
    await this.taskService.createCompleteTask(this.task).subscribe(() => {
    });
    await this.taskService.deleteTask(taskId).subscribe(() => {
      console.log("task deleted");
    });
    const toast = await this.toastCtrl.create({
      message: 'Congratulations! This task is complete.',
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }
  ngOnInit() {}

}
