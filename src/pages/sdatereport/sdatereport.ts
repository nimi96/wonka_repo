import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';
/**
 * Generated class for the SdatereportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sdatereport',
  templateUrl: 'sdatereport.html',
})
export class SdatereportPage {


public db:any;
public items:any;
public solddate:any;
public sdate:any;
public username;
public password;
public remoteDB:any;
public total:any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SdatereportPage');
 
//alert(this.navParams.get('date'))


this.refresh();
  
  

  }














refresh(){

/*
this.date1 = new Date();
var month = this.date1.getUTCMonth() + 1;
var day = this.date1.getUTCDate();
var year = this.date1.getUTCFullYear();
this.createdate=month+ "/" + day + "/" + year;

*/




  this.remoteDB = 'https://0688ea10-ac0f-4885-a25e-aab174554829-bluemix.cloudant.com/solditem/';
    this.username = '0688ea10-ac0f-4885-a25e-aab174554829-bluemix';
    this.password = '29d8c35d93e1a74de48cb1f229ae55970cf48bdf';





this.db=new Pouchdb('solditem')

this.items=[];





this.db=new Pouchdb('solditem')

this.items=[];


this.db.sync(this.remoteDB, {
  live: true,
  retry: true,
  username: this.username,
  password: this.password,
}).on('change', function (change) {
  
  console.log ("yo, something changed!");

}).on('paused', function (info) {
  
  console.log("replication was paused, usually because of a lost connection");
}).on('active', function (info) {
  console.log(" replication was resumed");

}).on('error', function (err) {
  console.log(" totally unhandled error (shouldn't happen");
});





this.db.sync(this.remoteDB,{
  live: true,
  username: this.username,
  password: this.password,
  retry: true
             });













this.db.allDocs({include_docs:true},(err,result)=>{



if(!err){


	let rows =result.rows;


	console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
	

this.sdate=this.navParams.get('date');

this.solddate=rows[i].doc.date;

if(this.solddate==this.navParams.get('date')){



this.items.push(rows[i].doc);

}

}





}

this.total=0;
for (i=0;i<this.items.length;i++){
this.total=this.items[i].deal+this.total;

}

console.log(this.total);



})


























}

}
