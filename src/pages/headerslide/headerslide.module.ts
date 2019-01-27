import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderslidePage } from './headerslide';
import {ComponentsModule} from '../../components/components.module'
import { Ng2OdometerModule } from 'ng2-odometer';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    HeaderslidePage,
      ],
  imports: [
    IonicPageModule.forChild(HeaderslidePage),
    ComponentsModule,
    Ng2OdometerModule.forRoot(),ChartsModule

  ],
})
export class HeaderslidePageModule {}
