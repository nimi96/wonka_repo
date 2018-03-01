import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
/**
 * Generated class for the Try1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-try1',
  templateUrl: 'try1.html',
})
export class Try1Page {

  qrData = null;
  createdCode = null;
 



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


createCode() {
    this.createdCode = this.qrData;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Try1Page');
  }

}
