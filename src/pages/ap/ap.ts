import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import Pouchdb from 'pouchdb';
import { AlertController } from 'ionic-angular';
import {QRCodeComponent} from 'angular2-qrcode';
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



  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  }



ionViewDidEnter(){
	this.refresh();

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApPage');
  }



addproduct(){

//alert("adding");


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

this.navCtrl.push('Tab1Page', {

item_id:item._id

})
}




}


