import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface pageInterface {

title:string,
pagename:any,
tabcomponent?:any,
index?:number,
icon:string;

}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


	rootPage='TabsPage';

	

  @ViewChild(Nav) nav: Nav;



	pages:pageInterface[]=[

     

     {title:'item reg', pagename:'TabsPage', tabcomponent:'Tab1Page',index:0,icon:'clipboard'},
     {title:'sale', pagename:'TabsPage', tabcomponent:'Tab2Page',index:1,icon:'exit'},
     {title:'Product enquire', pagename:'SpecialPage',icon:'md-information'},
     {title:'product updation', pagename:'PdPage',icon:'alert'},
     {title:'report', pagename:'RepoPage',icon:'stats'},
     {title:'All products', pagename:'ApPage',icon:'ios-archive'},
   
     
    


	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

//  ionViewDidLoad() {
  //  console.log('ionViewDidLoad MenuPage');
  //}


openPage(page:pageInterface){


let params={};



if(page.index){
params={tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index !==undefined){
  this.nav.getActiveChildNav().select(page.index);
} 
else
{
  this.nav.setRoot(page.pagename,params);
}
}







isActive(page:pageInterface){
let childNav=this.nav.getActiveChildNav();
if (childNav) {
  
console.log("hey");

  if(childNav.getSelected() &&  childNav.getSelected().root === page.tabcomponent){


 
  return 'primary';
  

  }

  return;

}

if(this.nav.getActive()&& this.nav.getActive().name === page.pagename )
{


 return 'primary';
}

}






}
