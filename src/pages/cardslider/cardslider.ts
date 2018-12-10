import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { VisapagePage } from '../visapage/visapage';

/**
 * Generated class for the CardsliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardslider',
  templateUrl: 'cardslider.html',
})
export class CardsliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsliderPage');
  }
  gotoSocial(){
    this.navCtrl.push(HomePage)
  }
  gotoLogin(){
    this.navCtrl.push(LoginPage)
  }
  gotoVisa(){
    this.navCtrl.push(VisapagePage)
  }
}
