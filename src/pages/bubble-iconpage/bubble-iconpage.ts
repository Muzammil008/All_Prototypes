import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { CardIoPage } from '../card-io/card-io';
import { ChatbotPage } from '../chatbot/chatbot';
import { QrReaderPage } from '../qr-reader/qr-reader';

import { VisapagePage } from '../visapage/visapage';
import { ExpensechartPage } from '../expensechart/expensechart';


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
  tab2Root = QrReaderPage;
  tab3Root = ChatbotPage;
  tab4Root = ExpensechartPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BubbleIconpagePage');
  }
}
