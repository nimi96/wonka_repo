import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {


	 qrData = null;
  createdCode = null;
  scannedCode ="9B39E2FA-5DD6-E5B8-8ED5-9D5AE2DA57C4";

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }


scanCode(){



    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    
    }, (err) => {
        
        console.log('Error: ', err);
 

    });
 

  }




sellp(){


this.navCtrl.push('SellpPage',{item_id:this.scannedCode});

} 



}
