import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';
import * as moment from 'moment';
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
public period=[];



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

//this.cp();




//console.log("sold date"+this.solddate);

var a = moment(this.navParams.get('date'));
var b = moment(this.navParams.get('date2'));


for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {


console.log(m.format('YYYY-MM-DD'));

this.period.push(m.format('YYYY-MM-DD'));
console.log(this.period);


var bc=this.period.indexOf(this.solddate);

console.log(bc);




}



if (bc !== -1) {
  
  this.items.push(rows[i].doc);
}









}

}


})


//this.navParams.get('date')
//this.navParams.get('date2')




}












/*

cp(){

var a = moment(this.navParams.get('date'));
var b = moment(this.navParams.get('date2'));



for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {


console.log(m.format('YYYY-MM-DD'));

this.period.push(m.format('YYYY-MM-DD'));

console.log(this.period);


var bc=this.period.indexOf(this.solddate);

console.log(bc);

}

}


*/



}













