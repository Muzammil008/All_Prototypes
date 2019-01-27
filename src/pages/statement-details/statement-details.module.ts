import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatementDetailsPage } from './statement-details';

@NgModule({
  declarations: [
    StatementDetailsPage,
    
  ],
  
  imports: [
    IonicPageModule.forChild(StatementDetailsPage)
  ],
  
})
export class StatementDetailsPageModule {}
