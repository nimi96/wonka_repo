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


/*
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks   C:\wonka_app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk my-alias
C:\Users\nimit\AppData\Local\Android\sdk1\build-tools\25.0.3\zipalign.exe -v 4 C:\wonka_app\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk C:\Users\nimit\Desktop\try2.apk
C:\Users\nimit\AppData\Local\Android\sdk1\build-tools\25.0.3\apksigner.bat verify C:\Users\nimit\Desktop\try2.apk
*/
