import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertCtrl: AlertController) {}

  async reminderAlert(date) {
    let alert = await this.alertCtrl.create({
      header: date,
      message: 'Description of reminder',
      buttons: ['Ok']
    })
    await alert.present()
  }

}
