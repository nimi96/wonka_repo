import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';
import * as moment from 'moment';

/**
 * Generated class for the ReportdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportday',
  templateUrl: 'reportday.html',
})
export class ReportdayPage {
public db:any;
public items:any;
public solddate:any;
public date1:any;
public createdate:any;
public try;
public res;
public username;
public password;
public remoteDB:any;






  constructor(public navCtrl: NavController, public navParams: NavParams) {

//alert(this.navParams.get('date'))


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportdayPage');


//alert(this.navParams.get('date'))

this.refresh();

  }


ionViewDidEnter(){
  this.refresh();

}






refresh(){


this.try=moment().format();  
console.log(this.try);
this.res = this.try.slice(0, 10);
console.log(this.res);


    this.remoteDB = 'https://0688ea10-ac0f-4885-a25e-aab174554829-bluemix.cloudant.com/solditem/';
    this.username = '0688ea10-ac0f-4885-a25e-aab174554829-bluemix';
    this.password = '29d8c35d93e1a74de48cb1f229ae55970cf48bdf';


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

this.db=new Pouchdb('solditem')




this.db.allDocs({include_docs:true},(err,result)=>{



if(!err){


	let rows =result.rows;


	console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
	

this.solddate=rows[i].doc.date;

if(this.solddate==this.res){



this.items.push(rows[i].doc);

}
}

}


})

















}










}
