import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import Pouchdb from 'pouchdb';
import { AlertController } from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
//import { Printer, PrintOptions } from '@ionic-native/printer';

//import * as Pouchdb from 'pouchdb';
/**
 * Generated class for the ApPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ap',
  templateUrl: 'ap.html',
})
export class ApPage {
private items;
private db;
public remoteDB:any;
public username;
public password;
pdfObj = null;

public cdata:any;

public cstock;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController,private plt: Platform, private file: File, private fileOpener: FileOpener) {

  }



ionViewDidEnter(){
	this.refresh();

}


syc(){





this.db=new Pouchdb('items')
this.items=[];



////////////////////syc function///////////////


this.remoteDB = 'https://0688ea10-ac0f-4885-a25e-aab174554829-bluemix.cloudant.com/item/';
this.username = '0688ea10-ac0f-4885-a25e-aab174554829-bluemix';
this.password = '29d8c35d93e1a74de48cb1f229ae55970cf48bdf';
this.db.sync(this.remoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
  console.log ("yo, something changed!");

}).on('paused', function (info) {
  console.log("replication was paused, usually because of a lost connection");
}).on('active', function (info) {
  console.log(" replication was resumed");

}).on('error', function (err) {
  console.log(" totally unhandled error (shouldn't happen");
});

////////////////////////////////////////////////////////////////////////////////////////

/*
  let options = {
      live: true,
      retry: true,
      continuous: true,
      
      auth: {
       
        username: this.username,
       
        password: this.password
      }
    };
 
 
    this.db.sync(this.remoteDB,{
  live: true,
  username: this.username,
  password: this.password,
  retry: true
             });


*/


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




refresh(){


this.db=new Pouchdb('items')
this.items=[];

/*

////////////////////syc function///////////////


this.remoteDB = 'https://0688ea10-ac0f-4885-a25e-aab174554829-bluemix.cloudant.com/item/';
this.username = '0688ea10-ac0f-4885-a25e-aab174554829-bluemix';
this.password = '29d8c35d93e1a74de48cb1f229ae55970cf48bdf';
this.db.sync(this.remoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
  console.log ("yo, something changed!");

}).on('paused', function (info) {
  console.log("replication was paused, usually because of a lost connection");
}).on('active', function (info) {
  console.log(" replication was resumed");

}).on('error', function (err) {
  console.log(" totally unhandled error (shouldn't happen");
});

////////////////////////////////////////////////////////////////////////////////////////

/*
  let options = {
      live: true,
      retry: true,
      continuous: true,
      
      auth: {
       
        username: this.username,
       
        password: this.password
      }
    };
 
 
    this.db.sync(this.remoteDB,{
  live: true,
  username: this.username,
  password: this.password,
  retry: true
             });


*/


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

 




  ionViewDidLoad() {
    console.log('ionViewDidLoad ApPage');
  }



addproduct(){



this.navCtrl.push(Tab1Page);



}



Deleteitem(item){



/*
if (confirm("are you sure want to delet this ?")){


this.db.remove(item,(err,result)=>{

if(!err){
  alert("product has been delete");

  this.refresh();
}

})
}


*/


let confirm = this.alertCtrl.create({
      title: 'Warning',
      message: 'are you sure want to delete this item??',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          


this.db.remove(item,(err,result)=>{

if(!err){




  let alert = this.alertCtrl.create({
      title: 'Deleted ',
      message: 'This product has been deleted !',
      buttons: ['Ok']


    });

    alert.present()
 
    this.refresh();


}

})


          }
        }
      ]
    });
    confirm.present();



}



updateitem(item){
this.navCtrl.push('Tab1Page', {item_id:item._id})
}






print(idx,item){



console.log(item.name)
console.log(idx);


var x=document.getElementsByClassName("qrcode");

console.log(x[idx]);


var data=x[idx];
var b=data.getElementsByTagName("img")




console.log(b[0].src);

this.cdata=b[0].src

var docDefinition = { content:[ {
      // you'll most often use dataURI images on the browser side
      // if no width/height/fit is provided, the original size will be used
      image: this.cdata,
    },

    { text: item.name, style: 'story', margin: [20, 20, 0, 20] },
    
    ]  

  };


this.pdfObj = pdfMake.createPdf(docDefinition);




this.downloadPdf();



}





 downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'Mycode.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'Mycode.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }









}





