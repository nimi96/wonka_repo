import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';
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








  constructor(public navCtrl: NavController, public navParams: NavParams) {

alert(this.navParams.get('date'))


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportdayPage');





alert(this.navParams.get('date'))

this.refresh();

  }



refresh(){


this.date1 = new Date();
var month = this.date1.getUTCMonth() + 1;
var day = this.date1.getUTCDate();
var year = this.date1.getUTCFullYear();
this.createdate=month+ "/" + day + "/" + year;


this.db=new Pouchdb('solditem')

this.items=[];

this.db.allDocs({include_docs:true},(err,result)=>{



if(!err){


	let rows =result.rows;


	console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
	

this.solddate=rows[i].doc.date;

if(this.solddate==this.createdate){



this.items.push(rows[i].doc);

}
}

}


})

}










}
