import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintPage } from './print';
//import { Printer, PrintOptions } from '@ionic-native/printer';
@NgModule({
  declarations: [
    PrintPage,

  ],
  imports: [
    IonicPageModule.forChild(PrintPage),
  //  Printer,
  ],
})
export class PrintPageModule {}
