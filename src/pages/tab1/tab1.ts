import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
private item;
public db:any;
public PouchDB:any;
public photo:any;
public base64image:string;
public img:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ,private camera: Camera) {
 

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


	      let alert = this.alertCtrl.create({
        title: 'updated succesfully !',
        message: 'new item updated!',
        buttons: ['Ok']
	      });

      alert.present()


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
quan:this.quan,
img:this.photo



},
(err,result)=>{
if(!err){

    let alert = this.alertCtrl.create({
      title: 'created!',
      message: 'new item registerd!',
      buttons: ['Ok']


    });

    alert.present()

}




this.navCtrl.push('ApPage');
})



}
}



cancel(){

this.navCtrl.push('ApPage');

}





takephoto(){


  
   
const options: CameraOptions = {
  quality: 20,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64image= 'data:image/jpeg;base64,' + imageData;

 this.photo=this.base64image;
 



// this.photo.reverse();




}, (err) => {
 // Handle error
});


}






}
