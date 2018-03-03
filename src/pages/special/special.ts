import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {


	 qrData = null;
  createdCode = null;
  scannedCode =null;



  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }


scanQR(){



	 this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    
    }, (err) => {
        
        console.log('Error: ', err);
 

    });
 
}


geten(){



//alert("hey this is get enquiry ");

this.navCtrl.push('PenqPage',{item_id:this.scannedCode});




}



}
