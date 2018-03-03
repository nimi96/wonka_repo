import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PenqPage } from './penq';

@NgModule({
  declarations: [
    PenqPage,
  ],
  imports: [
    IonicPageModule.forChild(PenqPage),
  ],
})
export class PenqPageModule {}
