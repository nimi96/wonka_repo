import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the PrintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-print',
  templateUrl: 'print.html',
})
export class PrintPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public printer: Printer) 


  {
   

  }






  ionViewDidLoad() {
    console.log('ionViewDidLoad PrintPage');

this.printer.check(

)


  }




hello(){
 

 /*this.printer.isAvailable().then(value => {
      
      console.log("isAvailable", value);

    }).catch(error => {
      
      console.log("ERROR",error);
  
    });



let options: PrintOptions = {
     name: 'MyDocument',
     printerId: 'printer007',
     duplex: true,
     landscape: true,
     grayscale: true
   };



   this.printer.print("content", options).then();

*/



  this.printer.isAvailable().then(function(){
            this.printer.print("https://www.techiediaries.com").then(function(){
            let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'succesful',
        buttons: ['Ok']
        });

      alert.present()



            },function(){
            


            let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Error : printing is unavailable on your device',
        buttons: ['Ok']
        });

      alert.present()

            


            });
        }, function(){
        
let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Error : printing is unavailable on your device',
        buttons: ['Ok']
        });

      alert.present()



        

        });

}


}