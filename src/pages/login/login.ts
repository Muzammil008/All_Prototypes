import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CardsliderPage } from '../cardslider/cardslider';
import { VisapagePage } from '../visapage/visapage';
import { QrReaderPage } from '../qr-reader/qr-reader';
import { CardIoPage } from '../card-io/card-io';

declare var $:any;
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

  activeOverlay(){
    $('.ion-fab').toggleClass('active');

    if( $('.overlay').css('display') == 'none' ){
      $('.overlay').fadeIn(300);
    }
    else
    {
      $('.overlay').fadeOut(300);
    }
    
  }

  gotoQrReader(){
    this.navCtrl.push(QrReaderPage)
  }

  gotoCardIo() {
    this.navCtrl.push(CardIoPage)
  }
}
