import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommunicatorProvider } from '../providers/communicator/communicator';
import { LoginPage } from '../pages/login/login';
import { CardsliderPage } from '../pages/cardslider/cardslider';
import { VisapagePage } from '../pages/visapage/visapage';
import { FormsModule }   from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { QrReaderPage } from '../pages/qr-reader/qr-reader';
import { Camera } from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';
import { CardIoPage } from '../pages/card-io/card-io';
import { ReversePipe } from '../pipes/reverse/reverse';
import { ChartModule} from 'angular2-highcharts';
import { Contacts } from '@ionic-native/contacts';
import { ContactListPage } from '../pages/contact-list/contact-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CardsliderPage,
    VisapagePage,
    QrReaderPage,
    CardIoPage,
    ReversePipe,
    ContactListPage,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,ScrollEventModule,NgQRCodeReaderModule,
    HttpClientModule, ChartModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CardsliderPage,
    VisapagePage,
    QrReaderPage,
    CardIoPage,
    ContactListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,CardIO,Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommunicatorProvider
  ]
})
export class AppModule {}
