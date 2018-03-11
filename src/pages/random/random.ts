import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public printer: Printer ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomPage');
  }




print(){

this.printer.isAvailable().then();

let options: PrintOptions = {
     name: 'MyDocument',
     printerId: 'printer007',
     duplex: true,
     landscape: true,
     grayscale: true
   };

this.printer.print("hello", options).then();

}
}