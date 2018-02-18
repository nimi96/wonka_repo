import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1Page } from '../tab1/tab1';


import Pouchdb from 'pouchdb';



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



  constructor(public navCtrl: NavController, public navParams: NavParams) {
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



}
