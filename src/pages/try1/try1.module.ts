import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Try1Page } from './try1';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [
    Try1Page,
  ],
  imports: [
    IonicPageModule.forChild(Try1Page),
    NgxQRCodeModule,
  ],
})
export class Try1PageModule {}
