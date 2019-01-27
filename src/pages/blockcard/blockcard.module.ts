import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlockcardPage } from './blockcard';

@NgModule({
  declarations: [
    BlockcardPage,
  ],
  imports: [
    IonicPageModule.forChild(BlockcardPage),
  ],
})
export class BlockcardPageModule {}
