import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensechartPage } from './expensechart';

@NgModule({
  declarations: [
    ExpensechartPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensechartPage),
  ],
})
export class ExpensechartPageModule {}
