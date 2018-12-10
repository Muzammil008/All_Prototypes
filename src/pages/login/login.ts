import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CardsliderPage } from '../cardslider/cardslider';
import { VisapagePage } from '../visapage/visapage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoSocial(){
    this.navCtrl.push(HomePage)
  }
  gotoSlider(){
    this.navCtrl.push(CardsliderPage)
  }

  gotoVisa(){
    this.navCtrl.push(VisapagePage)
  }



}
