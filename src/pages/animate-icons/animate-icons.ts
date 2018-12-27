import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnimateIconsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $: any;

@IonicPage()
@Component({
  selector: 'page-animate-icons',
  templateUrl: 'animate-icons.html',
})
export class AnimateIconsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }

  ionViewDidLoad() {
    $('.aim-folder--icon').click(function (e) {
      e.preventDefault();
      $(this).closest('.aim-folder').toggleClass('open');
    });
  }

}
