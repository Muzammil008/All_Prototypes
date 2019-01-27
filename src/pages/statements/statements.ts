
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component} from '@angular/core';
import * as $ from 'jquery'
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
/**
 * Generated class for the StatementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statements',
  templateUrl: 'statements.html',
  animations: [
    trigger('itemState', [
      transition('void => *', [
              
        query('.child',[style({opacity: 0}),  stagger(100, [
          style({ opacity: 1,transform: 'translateX(100%)' }),animate('500ms ease-in')
        ])
      ])
      
    ]),
    ]),
    trigger('itemState1', [
      transition('void => *', [
              
        query('.child1',[style({opacity: 0}),  stagger(100, [
          style({ opacity: 1,transform: 'translateX(100%)' }),animate('500ms ease-in')
        ])
      ])
      
    ]),
    ])
    
  ]
})
export class StatementsPage {
 

  ngAfterViewInit(){
   
    $(".popup img").click(function () {
     

        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span").click(function () {
      
      
      $(".show").fadeOut();
    });
    

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatementsPage');
  }
  
}
