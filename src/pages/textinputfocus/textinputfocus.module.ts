import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextinputfocusPage } from './textinputfocus';
import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    TextinputfocusPage,SearchPipe
  ],
  imports: [
    IonicPageModule.forChild(TextinputfocusPage),
  ],
})
export class TextinputfocusPageModule {}
