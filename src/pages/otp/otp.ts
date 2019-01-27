import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, MenuController, Events  } from 'ionic-angular';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  public actionSheet:any = false;
   sidebarMenu:boolean = false;
  
  
  constructor(private zone:NgZone,public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public menuCtrl: MenuController, public events: Events) {
     
    this.zone=new NgZone({enableLongStackTrace:false});
    console.log(this.sidebarMenu);
  }

  getClass() {
    // alert("Get Class ="+this.sidebarMenu);
    if (this.sidebarMenu == false) {
      return '';
    }
    else {
      return 'active'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  menuClosed() {
   // alert("close");
    this.events.publish('menu:closed', '');
    this.menuCtrl.close();
  
    let self=this;
    self.zone.run(() => {
      this.sidebarMenu = false;
    })
      
    console.log('Closed: '+ this.sidebarMenu);
  }

  menuOpened() {
   // alert("open")
    this.events.publish('menu:opened', '');
    this.menuCtrl.open();
    let self=this;
  self.zone.run(()=>{

   
      this.sidebarMenu=true;
  
  })
    
  //  this.sidebarMenu = true;
    console.log('Opened: '+ this.sidebarMenu);
    
  }

  // sidebarToggle() {
  //   (this.sidebarMenu == false) ? this.sidebarMenu = true : this.sidebarMenu = false;
  //   //alert(this.sidebarMenu);

  //   console.log(this.menuCtrl);
  // }

  // presentActionSheet() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: 'Modify your album',
  //     buttons: [
  //       {
  //         text: 'Destructive',
  //         role: 'destructive',
  //         handler: () => {
  //           console.log('Destructive clicked');
  //         }
  //       },{
  //         text: 'Archive',
  //         handler: () => {
  //           console.log('Archive clicked');
  //         }
  //       },{
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

}
