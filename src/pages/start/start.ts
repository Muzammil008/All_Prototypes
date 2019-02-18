import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { QrReaderPage } from '../qr-reader/qr-reader';
import { LoginPage } from '../login/login';
import { VisapagePage } from '../visapage/visapage';
import { CardsliderPage } from '../cardslider/cardslider';
import { CardIoPage } from '../card-io/card-io';

//import introJs from '../../assets/js/intro.js';

//declare var intro;

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  public animationListShow: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //intro.start();
  }
  
  // intro() {
  //   let intro = introJs.introJs();
  //   // Initialize steps
  //   intro.setOptions({
  //     steps: [
  //       {
  //         intro: "Hello world!"
  //       },
  //       {
  //         element: document.querySelector('#step1'),
  //         intro: "This is a tooltip."
  //       }
  //     ]
  //   });
  //   intro.start();
  // }

  public animationList() {
    this.animationListShow = true;
  }

  public functionList() {
    this.animationListShow = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');

  }
  card() {
    this.navCtrl.push("StatementsPage");
  }
  card1() {
    this.navCtrl.push("HeaderslidePage");
  }
  card2() {
    this.navCtrl.push("SuccessPage");
  }
  public gotoExpenseChart() {
    this.navCtrl.push("ExpensechartPage")
  }

  public gotoAccounts() {
    this.navCtrl.push("AccountsPage")
  }

  public gotoOTP() {
    this.navCtrl.push("OtpPage")
  }

  public gotoBlockCard() {
    this.navCtrl.push("BlockcardPage")
  }

  public textInputFocus() {
    this.navCtrl.push("TextinputfocusPage")
  }

  public gotoStatementDetails() {
    this.navCtrl.push("StatementDetailsPage");

  }

  public gotoRulerPage() {
    this.navCtrl.push(HomePage);

  }

  public gotoQrReader() {
    this.navCtrl.push(QrReaderPage)
  }


  gotochatBot() {
    this.navCtrl.push("ChatbotPage")
  }
  public gotoLogin() {

    this.navCtrl.push(LoginPage)
  }
  gotoSlider() {
    this.navCtrl.push(CardsliderPage)
  }
  gotocardId() {
    this.navCtrl.push(CardIoPage)
  }

  gotoVisa() {
    this.navCtrl.push(VisapagePage)
  }





}
