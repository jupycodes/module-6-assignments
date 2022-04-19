import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page{

  display = 'images';

  constructor(private navCtrl: NavController, private player: VideoPlayer) {}

  showAchievements(){
    this.navCtrl.navigateForward('achievements');
  }

  showImages(){
    this.display = 'images';
  }
  showVideos(){
    this.display = 'videos';
  }
  playVid(url: string) {
    this.player.play('url').then(() => {
    }).catch((err) => {
      alert(err);
    });
  }

}
