import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementsPageRoutingModule } from './achievements-routing.module';

import { AchievementsPage } from './achievements.page';
import {Tab1PageRoutingModule} from "../../tab1/tab1-routing.module";
import {Tab2PageRoutingModule} from "../../tab2/tab2-routing.module";
import {CompleteGoalsComponent} from "../../components/complete-goals/complete-goals.component";
import {CompleteTasksComponent} from "../../components/complete-tasks/complete-tasks.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AchievementsPageRoutingModule,
        Tab1PageRoutingModule,
        Tab2PageRoutingModule
    ],
  declarations: [AchievementsPage, CompleteGoalsComponent, CompleteTasksComponent]
})
export class AchievementsPageModule {}
