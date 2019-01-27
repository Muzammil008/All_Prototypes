import { Component, ViewChild, ViewChildren, ElementRef, OnChanges, Renderer, QueryList, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the StatementDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-statement-details',
  templateUrl: 'statement-details.html',
  // template: `
  // <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  // `,
  // styles: [`
  // p {
  //   width:200px;
  //   background:lightgray;
  //   margin: 100px auto;
  //   text-align:center;
  //   padding:20px;
  //   font-size:1.5em;
  // }
  // `],
  animations: [

    // Define animations here.

    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', 
        animate('100ms ease-in', 
          keyframes([ 
            style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity:0.5, transform: 'translateY(35px)', offset: 0.5}),
            style({opacity:1, transform: 'translateY(0)', offset: 1})
          ]) 
        ) 
      ),

    ]),

    // Card Animation
    trigger('slideCardAnimation', [
      state('none', style({
        transform: 'rotateY(0deg)'
      })),
      state('right', style({
        transform: 'rotateY(-15deg)'
      })),
      state('left', style({
        transform: 'rotateY(15deg)'
      })),

      transition('* <=> right', [
        animate('0.2s')
      ]),
      transition('* <=> left', [
        animate('0.2s')
      ]),

    ])
    
 
   ]
})

export class StatementDetailsPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('slidecards') slidecards : ElementRef;
  //@ViewChildren('slidecards') slidecards : QueryList<any>;//ElementRef;
  
  state: string = 'none';
  openArticle = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private elementRef:ElementRef) {

  }

  ngAfterViewInit() {
    let x = this.slides;
    //console.log(x);
    //let _cardElement = JSON.stringify(this.slidecards);
    //console.log('slidecards: '+ this.slidecards.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>'); );
  
  //  var d1 = this.elementRef.nativeElement.querySelector('.one');
  //d1.insertAdjacentHTML('beforeend', '<div class="two">two</div>');

  //this.slidecards.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
  
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  getClass() {
    // alert("Get Class ="+this.sidebarMenu);
    if (this.openArticle == false) {
      return '';
    }
    else {
      return 'contentOpen'
    }
  }

  cardZoom() {
    if (this.openArticle == false) {
      return '';
    }
    else {
      return 'width:1'
    }
  }

  openContent() {
    this.openArticle = true;
  }

  exitContent() {
    this.openArticle = false;
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    let prevIndex = this.slides.getPreviousIndex();

    console.log('Current index is', currentIndex);
    console.log('Prev Index is', prevIndex);

    $('.slide-cards-content--summary').removeClass('fadeInDown').removeClass('fadeInUp');

    // For Right Slide
    if( currentIndex > 0 &&  currentIndex > prevIndex )
    {
      this.state = 'right';      
      setTimeout(()=>{
        this.state = 'none';
        $('.slide-cards-content--summary').addClass('fadeInDown');
      },300);
    }
    else if( currentIndex < prevIndex ){
      this.state = 'left';
      setTimeout(()=>{
        this.state = 'none';
        $('.slide-cards-content--summary').addClass('fadeInUp');
      },300);
    }

    // setTimeout(() => {
    //   this.summaryContentAnimation();
    // }, 300);

  }

  // summaryContentAnimation(){
  //   $('.slide-cards-content--summary').removeClass('fadeInDown').removeClass('fadeInUp');
  //   //$('.slide-cards-content--summary.fadeInUp').removeClass('fadeInUp').addClass('fadeInDown');
  //   //$('.slide-cards-content--summary.fadeInDown').removeClass('fadeInDown').addClass('fadeInUp');
  // }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StatementDetailsPage');
    //console.log(this.getvalue);
  }

}
