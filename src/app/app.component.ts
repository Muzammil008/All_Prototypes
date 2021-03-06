import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { CardsliderPage } from '../pages/cardslider/cardslider';
// import { VisapagePage } from '../pages/visapage/visapage';
import { StartPage } from '../pages/start/start';
import { HomePage } from '../pages/home/home';
import { BubbleIconpagePage } from '../pages/bubble-iconpage/bubble-iconpage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "StartPage";
  //rootPage:any = BubbleIconpagePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

