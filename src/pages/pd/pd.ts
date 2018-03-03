import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import Pouchdb from 'pouchdb';
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

private items;

private db;

 qrData = null;
 createdCode = null;
 scannedCode = "9B39E2FA-5DD6-E5B8-8ED5-9D5AE2DA57C4";


  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdPage');
  }




ionViewDidEnter(){

  this.refresh();
  console.log("refreshed")

}





refresh(){


this.db=new Pouchdb('items')

this.items=[];

this.db.allDocs({include_docs:true},(err,result)=>{



if(!err){


  let rows =result.rows;


  console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
  

this.items.push(rows[i].doc);

}
}
})

}









updatepro(scannedCode){



alert(this.scannedCode);


this.navCtrl.push('Tab1Page',{item_id:this.scannedCode} );


console.log(this.scannedCode);




}




scanQR(){



	 this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    
    }, (err) => {
        
        console.log('Error: ', err);
 

    });
 
}

  

}
