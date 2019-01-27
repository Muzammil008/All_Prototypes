import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlockcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var $:any;

@IonicPage()
@Component({
  selector: 'page-blockcard',
  templateUrl: 'blockcard.html',
})
export class BlockcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlockcardPage');
  }

  ionViewDidEnter(){

    

  }

}
