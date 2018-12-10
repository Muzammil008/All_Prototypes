import { Component, ViewChild, NgZone, ElementRef, HostListener } from '@angular/core';
import { NavController, Platform, Content, Scroll } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { LoginPage } from '../login/login';
import { CardsliderPage } from '../cardslider/cardslider';
import { VisapagePage } from '../visapage/visapage';
import { ScrollEvent } from 'ngx-scroll-event';
import { QrReaderPage } from '../qr-reader/qr-reader';
import { CardIoPage } from '../card-io/card-io';
declare var $: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public totalAmount: number = 120;
  public totalAmountfix: number = 0;
  public data;
  public loadItems: any[] = [];
  public lastIndex: number = 2;
  public startIndex: number = 0;
  items = [];
  currentItem = 0;
  total = 10;
  @ViewChild(Content)
  content: Content;
  @ViewChild(Scroll) scroll: Scroll;
  itemImages: any;
  @ViewChild('myId') myId: ElementRef;
  // variables to check scrolling -
  private lastScrollTop: number = 0;
  private direction: string = "down";
  public Data = [
    {
      "Id": 1,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10,
      "totalAmount":120,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 2,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "totalAmount":110,
      "title": "qui est esse", "Points": 10,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 3,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,
      "totalAmount":100,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 4,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10, "totalAmount":90,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 5,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10,"totalAmount":80,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 6,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000, "Points": 10,"totalAmount":70,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 7,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,"totalAmount":60,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 8,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10,
      "title": "eum et est occaecati","totalAmount":50,
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 9,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10,"totalAmount":40,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 10,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "Points": 10,
      "title": "qui est esse","totalAmount":30,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 11,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000,
      "Points": 10,"totalAmount":20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 12,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 10,"totalAmount":10,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ]


  constructor(public zone: NgZone, public plt: Platform, private CommunicatorProvider: CommunicatorProvider, public navCtrl: NavController) {


    console.log(console.log(plt.width()))
    console.log(console.log(plt.height()))
    if (plt.height() <= 800) {
      this.lastIndex = 1;
    } else if (plt.height() <= 1200) {
      this.lastIndex = 2;
    }
    else if (plt.height() <= 1400) {
      this.lastIndex = 3;
    }
    else if (plt.height() <= 1600) {
      this.lastIndex = 3;
    }
    else if (plt.height() <= 1800) {
      this.lastIndex = 3;
    }
    else if (plt.height() <= 2000) {
      this.lastIndex = 4;
    }
    else if (plt.height() <= 2200) {
      this.lastIndex = 5;
    }
    else {
      this.lastIndex = 2;
    }
    console.log(this.lastIndex)

    // for (this.startIndex; this.startIndex < this.lastIndex; this.startIndex++) {

    //   this.items.push(this.Data[this.startIndex]);


    // }
    for (this.startIndex; this.startIndex < this.lastIndex; this.startIndex++) {

      this.items.push(this.Data[this.startIndex]);

      // this.totalAmount = this.totalAmount - 10;
      this.totalAmount=this.Data[this.currentItem ].totalAmount;
    }



  }
  ionViewDidLoad() {

  
console.log("call method")
    this.content.ionScrollEnd.subscribe((data) => {
      console.log(data)
      this.direction = data.directionY;
      this.zone.run(() => {
        if (data.directionY == 'up') {
          // if (data.scrollTop == 0) {
          //   this.totalAmount = 120;
          // }else{
          //   this.totalAmount = this.totalAmount + this.Data[this.currentItem - 1].Points;
          // }
          // console.log(this.currentItem);

          this.totalAmount=this.Data[this.currentItem - 1 ].totalAmount;

       

        } else {
          if (this.items.length == 12) {
            this.totalAmount=this.Data[this.currentItem - 1 ].totalAmount;
            // this.totalAmount = this.totalAmount - this.Data[this.currentItem - 1].Points;
          }
        }
      });
     
     
    })
  }


  onScroll(event) {

    let post = $('.gedf-card');
    // let totalPost = post.length;
    let totalPost = this.Data.length;
    let setPercentage = 100 / totalPost + '%';


    $('.gedf-card').each(function () {
      let positionTop = $(this).position().top;
      let positionBottom = positionTop + $(this).height();

      if ($('.scroll-content').scrollTop() >= positionTop && $('.scroll-content').scrollTop() <= positionBottom) {
        $(this).addClass('active').siblings().removeClass('active');
      }
    });

    let getActiveNumber = parseInt($('.gedf-card.active').attr('data-post-number'));
    console.log(getActiveNumber)
    this.currentItem = getActiveNumber;
    //  let getPercentage = parseInt(100 / totalPost) * getActiveNumber + '%';
    let getPercentage = 100 / totalPost * getActiveNumber + '%';



    if ($('.scroll-content').scrollTop() > 10) {
      $('.ruler').addClass('fixed');
      $('.ruler .pointer').css({ 'left': getPercentage });
    }
    else {
      $('.ruler').removeClass('fixed');
      $('.ruler .pointer').css({ 'left': 0 });
    }

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    console.log(infiniteScroll)


    return new Promise((resolve) => {
      setTimeout(() => {
        //console.log(infiniteScroll)

        // var index = Math.floor(Math.random() * 12) + 0
        console.log(this.lastIndex);
        this.items.push(this.Data[this.lastIndex]);
        console.log(this.items)
        this.lastIndex++;

        // this.totalAmount = this.totalAmount - this.Data[index].Points;
        // console.log(this.totalAmount)
        // if( this.totalAmount < 0){
        //   this.totalAmount=0;
        // }

        this.totalAmount=this.Data[this.currentItem - 1].totalAmount;





        // this.totalAmount = this.totalAmount - this.Data[index].Points;
        if (this.items.length >= this.Data.length) {
          infiniteScroll.enable(false);
          infiniteScroll.complete();
        } else {
          infiniteScroll.enable(true);
        }

      }, 500);
    })

  }

  gotoCardIo(){
    this.navCtrl.push(CardIoPage)
  }
  gotoLogin() {

    this.navCtrl.push(LoginPage)
  }

  gotoSlider() {
    this.navCtrl.push(CardsliderPage)
  }

  gotoVisa() {
    this.navCtrl.push(VisapagePage)
  }


  gotoQrReader(){
    this.navCtrl.push(QrReaderPage)
  }
}
