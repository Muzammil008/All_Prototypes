import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  private headerStatus: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsPage');
  }
  ionViewWillEnter() {
   
    
  }
  changedHeader(event): void {
    //(this.headerStatus == false) event
    console.log(event);
  }

}
