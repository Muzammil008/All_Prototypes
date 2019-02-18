import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AnimateIconsPage } from '../animate-icons/animate-icons';
import { BlockcardPage } from '../blockcard/blockcard';

import { CardIoPage } from '../card-io/card-io';
import { ChatbotPage } from '../chatbot/chatbot';

/**
 * Generated class for the BubbleIconpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bubble-iconpage',
  templateUrl: 'bubble-iconpage.html',
})
export class BubbleIconpagePage {
  tab1Root = CardIoPage;
  tab2Root = AnimateIconsPage;
  tab3Root = ChatbotPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BubbleIconpagePage');
  }

}
