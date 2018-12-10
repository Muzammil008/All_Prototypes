import { Component } from '@angular/core';
import { NavController, Platform, IonicPage, NavParams } from 'ionic-angular';
import { CardIO, CardIOResponse, CardIOOptions } from '@ionic-native/card-io';

/**
 * Generated class for the CardIoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-io',
  templateUrl: 'card-io.html',
})
export class CardIoPage {
  public showdata: any;
  public result: CardIOResponse;
  constructor(public platform: Platform, private cardIO: CardIO, public navCtrl: NavController) {
    console.log(this.result)
      }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardIoPage');
  }
  async scan() {
    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if (res) {
            let options = {
              requireExpiry: false,
              requireCVV: false,
              requirePostalCode: false,
              requireCardholderName: true,
              keepApplicationTheme:true,
              useCardIOLogo:true
            };
          return   this.cardIO.scan(options);

          }


        }).then(res => {
          console.log(res);
          this.result = res;
        
        }, err => {
          alert(err);
        });
  }
}
