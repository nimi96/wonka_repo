import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController  } from 'ionic-angular';
import Pouchdb from 'pouchdb';
import * as moment from 'moment';
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
private db2;
private desc;
private price;
private image;
private solditems;
private code;
private try;
private res;
public username;
public password;
public remoteDB:any;
public deal;



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
this.desc=result.desc;
this.price=result.price;
this.image=result.img;
this.code=result.code;

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

this.deal=this.quan1*this.price;

console.log("sqanitity"+this.quan1);
console.log("this is current quantity"+this.currentquan);


if (this.currentquan<=0) {


        let alert = this.alertCtrl.create({
        title: 'Failed',
        message: 'there is no or less stock then demand!!',
        buttons: ['Ok']
        });

      alert.present()


}


else {

  
//alert("this can be possible");

/*

this.date1 = new Date();
var month = this.date1.getUTCMonth() + 1;
var day = this.date1.getUTCDate();
var year = this.date1.getUTCFullYear();
this.newdate=month+ "/" + day + "/" + year;
*/



this.try=moment().format();  
console.log(this.try);
this.res = this.try.slice(0, 10);
console.log(this.res);




//this.res='2018-03-09';

this.item.quan=this.currentquan



this.db.put(this.item,(err,result)=>{

if(!err){


this.db2=new Pouchdb('solditem')

this.solditems=[];

    this.remoteDB = 'https://0688ea10-ac0f-4885-a25e-aab174554829-bluemix.cloudant.com/solditem/';
    this.username = '0688ea10-ac0f-4885-a25e-aab174554829-bluemix';
    this.password = '29d8c35d93e1a74de48cb1f229ae55970cf48bdf';


this.db2.sync(this.remoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
  
  console.log ("yo, something changed!");

}).on('paused', function (info) {
  
  console.log("replication was paused, usually because of a lost connection");
}).on('active', function (info) {
  console.log(" replication was resumed");

}).on('error', function (err) {
  console.log(" totally unhandled error (shouldn't happen");
});


 
    
















this.db2.post({name:this.item.name,
desc:this.item.desc,
price:this.item.price,
quantity:this.item.quan,
image:this.item.image,
code:this.item.code,
soldq:this.quan1,
date:this.res,
deal:this.deal,

 }, (err,result)=>{

if(!err){


console.log(this.db2.result);



}








});









let alert = this.alertCtrl.create({
        title: 'SUCCES',
        message: 'Product sold',
        buttons: ['Ok']
        });

      alert.present()








//alert(this.item.desc);
console.log(this.item.desc);







this.db2.sync(this.remoteDB,{
  live: true,
  username: this.username,
  password: this.password,
  retry: true
             });



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
