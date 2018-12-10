import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CardsliderPage } from '../cardslider/cardslider';

/**
 * Generated class for the VisapagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visapage',
  templateUrl: 'visapage.html',
})
export class VisapagePage {
  name:string;
  yname:string='YOUR NAME';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.name)
  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad VisapagePage');
  }

  changes(data){
   console.log(data)
   if(data != undefined){
    if (data.length <= 0) {
      this.name=undefined;
    }
   }
  
  }
  gotoSocial(){
    this.navCtrl.push(HomePage)
  }
  gotoLogin(){
    this.navCtrl.push(LoginPage)
  }

  gotoSlider(){
    this.navCtrl.push(CardsliderPage)
  }
}
