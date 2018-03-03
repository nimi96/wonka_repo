import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Pouchdb from 'pouchdb';


@IonicPage()
@Component({
  selector: 'page-penq',
  templateUrl: 'penq.html',
})
export class PenqPage {

private db;
private items;
public name="abc";
public desc;
public img;
public quan;
public price;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenqPage');
 this.refresh();
 this.Dispro();


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


Dispro(){

if (this.navParams.get('item_id')!=null){


this.db.get(this.navParams.get('item_id') ,(err, result)=> {
   if (!err) {


console.log(result.name);
this.name=result.name;
this.desc=result.desc;
this.price=result.price;
this.quan=result.quan;
this.img=result.img; 


 } 
}

);


}

else{

console.log("no items exits")


}




}






}
