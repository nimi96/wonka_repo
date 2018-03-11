import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';
/**
 * Generated class for the SprepoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprepo',
  templateUrl: 'sprepo.html',
})
export class SprepoPage {


public db:any;
public items:any;
public solddate:any;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprepoPage');


this.refresh();
  }







refresh(){



this.db=new Pouchdb('solditem')

this.items=[];

this.db.allDocs({include_docs:true},(err,result)=>{

if(!err){


	let rows =result.rows;


	console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
	


this.solddate=rows[i].doc.date;



}

}


})





}












}
