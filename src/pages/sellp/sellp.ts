import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController  } from 'ionic-angular';
import Pouchdb from 'pouchdb';
/**
 * Generated class for the SellpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellp',
  templateUrl: 'sellp.html',


})
export class SellpPage {
private db;
private name;
private item;
private items;
private quan;
private currentquan;
private quan1=0;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellpPage');
 
this.refresh();
  this.getcdata();


 if(this.navParams.get('item_id')!=null){
       
       

    	this.db.get(this.navParams.get('item_id'),(err, result)=>{

    		if(!err){

    		        	this.item=result;
    			
                 
                   this.quan=result.quan;
                 
            this.name=result.name;
    		}


    	})
    }

















  }

refresh(){

this.db=new Pouchdb('items')

this.items=[];

this.db.allDocs({include_docs:true},(err,result)=>{

if(!err){


	let rows=result.rows;


	console.log(rows);



for (var i=0 ; i<rows.length ; i++) {
	

this.items.push(rows[i].doc);
}

}

})


}




getcdata(){


if (this.navParams.get('item_id')!=null){


this.db.get(this.navParams.get('item_id') ,(err, result)=> {
   if (!err) {


console.log(result.quan);

this.quan=result.quan;
this.name=result.name;
 } 
}

);


}

else{

console.log("no items exits")


let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'no items exits',
        buttons: ['Ok']
        });

      alert.present()


  this.navCtrl.pop();




}

}


sell(){

if (this.item){

this.currentquan=this.quan-this.quan1;


console.log("sqanitity"+this.quan1);
console.log("this is current quantity"+this.currentquan);


if (this.currentquan<0) {


        let alert = this.alertCtrl.create({
        title: 'Failed',
        message: 'there is no or less stock then demand!!',
        buttons: ['Ok']
        });

      alert.present()


}


else {

  
//alert("this can be possible");

this.item.quan=this.currentquan


this.db.put(this.item,(err,result)=>{

if(!err){




let alert = this.alertCtrl.create({
        title: 'SUCCES',
        message: 'Product sold',
        buttons: ['Ok']
        });

      alert.present()


	this.navCtrl.pop();
}

else{
	return err
}



})

}



}





}








}
