import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApPage } from './ap';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ApPage,
  ],
  imports: [
    IonicPageModule.forChild(ApPage),
   NgxQRCodeModule,
  ],
})
export class ApPageModule {}
