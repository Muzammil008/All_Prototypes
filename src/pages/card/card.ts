import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
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
export class CardPage {
  items: string[] = ["Kashif","Taha"];
  chats:any[] =[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
      
    }
  ];
  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }
  addItem(){
    this.items.push('test');
}

deleteItem(item){
    this.items.splice(this.items.indexOf(item), 1);
}
}
