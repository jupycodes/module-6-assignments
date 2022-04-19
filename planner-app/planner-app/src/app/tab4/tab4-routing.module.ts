import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import {ImageDiaryComponent} from "../components/image-diary/image-diary.component";
import {VideoDiaryComponent} from "../components/video-diary/video-diary.component";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule],
  declarations: [
    ImageDiaryComponent,
    VideoDiaryComponent
  ],
  exports: [RouterModule, ImageDiaryComponent, VideoDiaryComponent]
})
export class Tab4PageRoutingModule {}
