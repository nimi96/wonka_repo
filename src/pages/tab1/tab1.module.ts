import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';
//import { QRCodeModule } from 'angular2-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [
    Tab1Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab1Page),
    NgxQRCodeModule,

  ],
})
export class Tab1PageModule {}
