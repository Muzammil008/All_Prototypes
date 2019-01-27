import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Observer } from 'rxjs';
import { Ng2OdometerModule } from 'ng2-odometer';
import { Chart } from 'chart.js';
import { NgCircleProgressModule,CircleProgressComponent } from 'ng-circle-progress';
import * as $ from 'jquery';

/**
 * Generated class for the HeaderslidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-headerslide',
  templateUrl: 'headerslide.html',
})
export class HeaderslidePage {
  
  title = 'app works!';

  options: Object;
    value: number;
    public number: number = 3000;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;
ngAfterViewInit(){
    $(".kashif").scroll(function() {
      console.log("Kashif")
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector(".header-top");
                if ($(this).scrollTop() > 1){  
                  $(".hammad,.kashif").addClass("smaller"); 
              }
              else{
                $(".hammad,.kashif").removeClass("smaller"); 
              }
                  //  console.log(distanceY);
           
             console.log($(this).scrollTop()+"");
            // if (distanceY > shrinkOn) {
            //   $(".hammad").addClass("smaller");
            // } else {
            //     if ( $(".hammad").hasClass("smaller")) {
            //       $(".hammad").removeClass("smaller");
            //     }
            // }
   });
  
}
    
  ionViewDidLoad() {
  
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

    // For auto mode
    setTimeout(() => this.number += this.number, 5000); // Update on 5 seconds
  }
  public trigger() {
    this.observer.next(true);
  }
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
card(){
  this.navCtrl.push("CardPage");
}


}
