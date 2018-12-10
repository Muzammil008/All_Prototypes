import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsliderPage } from './cardslider';

@NgModule({
  declarations: [
    CardsliderPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsliderPage),
  ],
})
export class CardsliderPageModule {}
