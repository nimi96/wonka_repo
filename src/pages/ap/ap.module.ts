import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApPage } from './ap';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  declarations: [
    ApPage,
  ],
  imports: [
    IonicPageModule.forChild(ApPage),
    QRCodeModule,
  ],
})
export class ApPageModule {}
