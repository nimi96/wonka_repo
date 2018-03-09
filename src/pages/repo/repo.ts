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



	alert("this is today");



}



SD(){


	alert(this.myDate);
}





SM(){

alert("this is from"+this.from+"this is to "+this.to);


}

}
