import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//import PouchDB from 'pouchdb';

import * as PouchDB from 'pouchdb';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  
 

//public items:any;

private name;

private desc;

private price;

private quan;


public db:any;
public PouchDB:any;
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
 

//this.db=new 



  }


setupdb(){


	


this.db=new PouchDB('items');




}


  ionViewDidLoad() {


    

    //console.log('ionViewDidLoad Tab1Page');


   this.setupdb();

  }

sg(){

	

this.db.post({
name:this.name,
desc:this.desc,
price:this.price,
quan:this.quan
},
(err,result)=>{
if(!err){

alert("created s");


}


this.navCtrl.push('ApPage');
})
}




cancel(){

this.navCtrl.push('ApPage');

}


}
