import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the PdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pd',
  templateUrl: 'pd.html',
})
export class PdPage {



 qrData = null;
  createdCode = null;
  scannedCode = null;


  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdPage');
  }





scanQR(){



	 this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    
    }, (err) => {
        
        console.log('Error: ', err);
 

    });
 
}

  

}
