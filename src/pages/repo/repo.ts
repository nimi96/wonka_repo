import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RepoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repo',
  templateUrl: 'repo.html',
})
export class RepoPage {
public myDate:any;
public from:any;
public to:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoPage');



  }




today(){


var date1 = new Date();
var month = date1.getUTCMonth() + 1;
var day = date1.getUTCDate();
var year = date1.getUTCFullYear();
var newdate=month+ "/" + day + "/" + year;

/*
	alert("this is today" + newdate);
*/


this.navCtrl.push('ReportdayPage',{date:newdate} );




}



SD(){


	alert(this.myDate);

this.navCtrl.push('SdatereportPage',{date:this.myDate} );


}





SM(){

alert("this is from"+this.from+"this is to "+this.to);

this.navCtrl.push('SprepoPage',{date:this.from ,date2:this.to});




}

}
