import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $ :any;
@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
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
export class SuccessPage {
  limit;
  ddData:any[] =[];
  prevlimit;
  ponkapUr=true;
  ponkapUr2=false;
  buttonslide(){
    
    console.log(this.limit)
    if(this.limit <100){
      this.limit=0;
     
    }else if(this.limit>=100){
      this.navCtrl.push('CongulationPage');
    }
    //this.prevlimit=this.limit;
  }
ngAfterViewInit(){
  let _self=this;
  $(function () {  
    var ddData = [
      {
          text: "Hammad",
          value: 1,
          selected: false,
          description: "123232323443",
          imageSrc: "../assets/imgs/logo1.png"
      },
      {
          text: "Kashif",
          value: 2,
          selected: false,
          description: "123232323443",
          imageSrc: "../assets/imgs/logo2.png"
      },
      {
          text: "Taha",
          value: 3,
          selected: false,
          description: "123232323443",
          imageSrc: "../assets/imgs/logo1.png"
      },
      {
          text: "Usman",
          value: 4,
          selected: false,
          description: "123232323443",
          imageSrc: "../assets/imgs/logo2.png"
      },
      {
        text: "Fahad",
        value: 4,
        selected: false,
          description: "123232323443",
          imageSrc: "../assets/imgs/logo1.png"
    }
  ];
  $('#ddlSocial').ddslick({
    data: ddData,
    //width: 280,
    imagePosition: "left",
    truncateDescription: true,
    showSelectedHTML: true,
    selectText: "Sreach for payee by Name, Account",
    onSelected: function (data) {
        console.log(data);
        _self.ponkapUr=false;
     
    }
});
});  
  
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.prevlimit=this.limit;
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }

}
