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
 
private item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 

  }


setupdb(){


this.db=new PouchDB('items');
}


  ionViewDidLoad() {

 this.setupdb();
    

    //console.log('ionViewDidLoad Tab1Page');


    if(this.navParams.get('item_id')!=null){



    	this.db.get(this.navParams.get('item_id'),(err, result)=>{

    		if(!err){

    			this.item=result;
    			
                 this.name=result.name;
                 this.desc=result.desc;
                 this.price=result.price;
                 this.quan=result.quan;

    			//console.log('hey'+result.name);
    			//this.name=result.name;

    		}


    	})
    }

  

  }

sg(){


//this is for update
if (this.item){


this.item.name=this.name;
this.item.desc=this.desc;
this.item.price=this.price;
this.item.quan=this.quan;
this.db.put(this.item,(err,result)=>{


if(!err){


	alert('update done right');
	
	this.navCtrl.pop();


}


} 


);






}

//this is for saving 

else{

	

this.db.post({
name:this.name,
desc:this.desc,
price:this.price,
quan:this.quan
},
(err,result)=>{
if(!err){




}


this.navCtrl.push('ApPage');
})



}
}



cancel(){

this.navCtrl.push('ApPage');

}


}
