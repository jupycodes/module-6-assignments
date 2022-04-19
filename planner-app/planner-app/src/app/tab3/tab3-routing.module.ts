import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import {NoteComponent} from "../components/note/note.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
    declarations: [
        NoteComponent
    ],
    exports: [RouterModule, NoteComponent]
})
export class Tab3PageRoutingModule {}
