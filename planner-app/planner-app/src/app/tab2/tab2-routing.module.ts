import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {GoalComponent} from "../components/goal/goal.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
    declarations: [
        GoalComponent
    ],
    exports: [RouterModule, GoalComponent]
})
export class Tab2PageRoutingModule {}
