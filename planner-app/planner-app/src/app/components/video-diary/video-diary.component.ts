import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-video-diary',
  templateUrl: './video-diary.component.html',
  styleUrls: ['./video-diary.component.scss'],
})
export class VideoDiaryComponent implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }

  playVideo(url: string) {
    this.videoPlayer.play('url').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  ngOnInit() {}

}
