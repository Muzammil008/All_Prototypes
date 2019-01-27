import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar,Platform } from 'ionic-angular';

/**
 * Generated class for the ExpensechartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var $:any;

@IonicPage()
@Component({
  selector: 'page-expensechart',
  templateUrl: 'expensechart.html',
})
export class ExpensechartPage {

  @ViewChild(Navbar) navBar: Navbar;
  public unregisterBackButtonAction: any;

  public expenseChart:boolean = false;

  public data:any = [
    {
      id:1,
      card:'Visa Card',
      cardType: 'visa',
      currentBalance: 750,
      lastTransaction: '1M',
      animation: 'fadeOutLeft',
      active: true,
      expenses: [{
        2019: [{
            month: [
              {
                date:1,
                month:'january',
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              }
              // {
              //   date:2,
              //   month:'january', 
              //   data:[
              //     {
              //       'expense': 150,
              //       'total': 800,
              //       'icon': 'boat'
              //     },
              //     {
              //       'expense': 50,
              //       'total': 800,
              //       'icon': 'brush'
              //     },
              //     {
              //       'expense': 80,
              //       'total': 800,
              //       'icon': 'bug'
              //     },
              //     {
              //       'expense': 600,
              //       'total': 800,
              //       'icon': 'bowtie'
              //     },
              //     {
              //       'expense': 700,
              //       'total': 800,
              //       'icon': 'bonfire'
              //     },
              //     {
              //       'expense': 150,
              //       'total': 800,
              //       'icon': 'boat'
              //     },
              //     {
              //       'expense': 50,
              //       'total': 800,
              //       'icon': 'brush'
              //     },
              //     {
              //       'expense': 80,
              //       'total': 800,
              //       'icon': 'bug'
              //     },
              //     {
              //       'expense': 600,
              //       'total': 800,
              //       'icon': 'bowtie'
              //     },
              //     {
              //       'expense': 700,
              //       'total': 800,
              //       'icon': 'bonfire'
              //     }
              //   ]
              // }
            ]
          }]
      }]
    },
    {
      id:1,
      card:'Master Card',
      cardType: 'master',
      currentBalance: 290,
      lastTransaction: '9H',
      animation: 'fadeOutLeft',
      active: true,
      expenses: [{
        2019: [{
            january: [
              {
                date:1, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              },
              {
                date:2, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              }
            ]
          }]
      }]
    },
    {
      id:1,
      card:'Visa Card',
      cardType: 'visa',
      currentBalance: 328,
      lastTransaction: '2H',
      animation: 'fadeOutLeft',
      active: true,
      expenses: [{
        2019: [{
            january: [
              {
                date:1, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              },
              {
                date:2, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              }
            ]
          }]
      }]
    },
    {
      id:1,
      card:'Master Card',
      cardType: 'master',
      currentBalance: 1590,
      lastTransaction: '26H',
      animation: 'fadeOutLeft',
      active: true,
      expenses: [{
        2019: [{
            january: [
              {
                date:1, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              },
              {
                date:2, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              }
            ]
          }]
      }]
    },
    {
      id:1,
      card:'Master Card',
      cardType: 'master',
      currentBalance: 5000,
      lastTransaction: '2D',
      animation: 'fadeOutLeft',
      active: true,
      expenses: [{
        2019: [{
            january: [
              {
                date:1, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              },
              {
                date:2, 
                data:[
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  },
                  {
                    'expense': 150,
                    'total': 800,
                    'icon': 'boat'
                  },
                  {
                    'expense': 50,
                    'total': 800,
                    'icon': 'brush'
                  },
                  {
                    'expense': 80,
                    'total': 800,
                    'icon': 'bug'
                  },
                  {
                    'expense': 600,
                    'total': 800,
                    'icon': 'bowtie'
                  },
                  {
                    'expense': 700,
                    'total': 800,
                    'icon': 'bonfire'
                  }
                ]
              }
            ]
          }]
      }]
    }
  ];

  constructor(public platform:Platform,public navCtrl: NavController, public navParams: NavParams) {

  }

  //  Fired when entering a page, after it becomes the active page. Quite similar to the previous one.
  ionViewDidEnter() { 
    this.initializeBackButtonCustomHandler();
  }

  // Fired when you leave a page, before it stops being the active one. Use it for things you need to run every time you are leaving a page (deactivate event listeners, etc.).
  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  public initializeBackButtonCustomHandler(): void {
    //mobile back button
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.customHandleBackButton();
      
    }, 10);
  }

  private customHandleBackButton(): void {
    // do what you need to do here ...
    if (this.expenseChart == false) {
      this.expenseChart = true;
      this.revertListBack();
    }
    else {
      this.expenseChart = false;
      this.navCtrl.pop();      
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      //header back button      
      if (this.expenseChart == true) {
        //this.deactiveChart();
        this.expenseChart = false;
        this.revertListBack();
      }
      else {
        //this.activeChart();
        this.expenseChart = true;
        this.navCtrl.pop();
      }    
    }
  }

  activeChart(){
    
    setTimeout(() => {
      this.expenseChart = true;
      
      setTimeout(() => {
        $('.cp-progress--balance').each(function(e){
          let getHeight = $(this).attr('data-height');
          $(this).animate({height:getHeight},1000);
        });
      }, 50);
      
    }, 1000);
    
  }

  deactiveChart(){
    this.expenseChart = false;
    
  }


  revertListBack(){
    $('.card').each(function(){
      //e.preventDefault();
      $(this).removeClass('active');
      $(this).closest('.scroll-content').removeClass('changed');

      //remove Animation
      var animation = $(this).attr('data-animation');
      $(this).find('.animated').removeClass(animation);

      // Show Data
      $('.card:not(.active) .card--current-balance').fadeIn(600);
      $('.card .wrap').fadeIn(600);
    });
  }
}
