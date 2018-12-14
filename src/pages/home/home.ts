import { Component, ViewChild, NgZone, ElementRef, HostListener } from '@angular/core';
import { NavController, Platform, Content, Scroll } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { LoginPage } from '../login/login';
import { CardsliderPage } from '../cardslider/cardslider';
import { VisapagePage } from '../visapage/visapage';

import { QrReaderPage } from '../qr-reader/qr-reader';
import { CardIoPage } from '../card-io/card-io';
declare var $: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public total_SumAmount: number = 0;
  public totalAmount: number = 120;
  public totalAmountfix: number = 0;
  public data;
  public loadItems: any[] = [];
  public lastIndex: number = 2;
  public startIndex: number = 0;

  public maxAmount: number;
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
      "PakAmount": 200000,
      "Points": 10,
      "totalAmount": 120,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 2,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "totalAmount": 110,
      "title": "qui est esse", "Points": 10,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 3,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,
      "totalAmount": 140,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 4,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10, "totalAmount": 60,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 5,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 150,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 6,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000, "Points": 10, "totalAmount": 50,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 7,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 8,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10,
      "title": "eum et est occaecati", "totalAmount": 50,
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 9,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 40,
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
      "title": "qui est esse", "totalAmount": 30,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 11,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000,
      "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 12,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 10, "totalAmount": 10,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
























    {
      "Id": 13,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000,
      "Points": 10,
      "totalAmount": 120,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 14,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "totalAmount": 110,
      "title": "qui est esse", "Points": 10,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 15,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,
      "totalAmount": 140,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 16,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10, "totalAmount": 60,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 17,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 150,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 18,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000, "Points": 10, "totalAmount": 50,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 19,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 20,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10,
      "title": "eum et est occaecati", "totalAmount": 50,
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 21,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 40,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 22,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "Points": 10,
      "title": "qui est esse", "totalAmount": 30,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 23,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000,
      "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 24,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 10, "totalAmount": 10,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },






    {
      "Id": 25,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000,
      "Points": 10,
      "totalAmount": 120,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 26,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "totalAmount": 110,
      "title": "qui est esse", "Points": 10,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 27,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,
      "totalAmount": 140,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 28,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10, "totalAmount": 60,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 29,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 150,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 30,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000, "Points": 10, "totalAmount": 50,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 31,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 32,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10,
      "title": "eum et est occaecati", "totalAmount": 50,
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 33,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 40,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 34,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "Points": 10,
      "title": "qui est esse", "totalAmount": 30,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 35,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000,
      "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 36,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 10, "totalAmount": 10,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },

    {
      "Id":37,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000,
      "Points": 10,
      "totalAmount": 120,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 38,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "totalAmount": 110,
      "title": "qui est esse", "Points": 10,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 39,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10,
      "totalAmount": 140,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 40,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10, "totalAmount": 60,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 41,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 150,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 42,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000, "Points": 10, "totalAmount": 50,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 43,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 44,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000, "Points": 10,
      "title": "eum et est occaecati", "totalAmount": 50,
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 45,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, "Points": 10, "totalAmount": 40,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "Id": 46,
      "Name": "Fahad",
      "imgUrl": "assets/imgs/a.jpg",
      "DollarAmount": 6000,
      "PakAmount": 300000,
      "Points": 10,
      "title": "qui est esse", "totalAmount": 30,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 47,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000,
      "Points": 10, "totalAmount": 20,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 48,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 10, "totalAmount": 10,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }








  ];

  // Ruler
  public ruler = $('.ruler');
  public screenWidth = window.innerWidth;
  public NumbersOfPosts = this.Data.length;
  public maxAmounts = this.maxAmount;
  public linesPerScreen = 44;
  public pointerWidth = ( this.screenWidth / this.linesPerScreen )  - 1.2;
  public activePostNumber = $('.gedf-card.active').attr('data-post-number');



  constructor(public zone: NgZone, public plt: Platform, private CommunicatorProvider: CommunicatorProvider, public navCtrl: NavController) {
    this.maxAmount = this.Data[0].totalAmount;

    // Sum of All Items Amount
    for (var i = 0; i < this.Data.length; i++) {
      this.total_SumAmount = this.total_SumAmount + this.Data[i].totalAmount;
    }

    // Get Max Value for totalAmount
    for (var i = 1; i < this.Data.length; i++) {
      if (this.maxAmount < this.Data[i].totalAmount) {
        this.maxAmount = this.Data[i].totalAmount;
      }
    }
    console.log('maxAmount: ' + this.maxAmount);

    
    
    // $(window).on('load resize', function() {
      
      
    // });  
    
    setTimeout(()=>{
      $('.ruler').empty();
      this.createRuler();
      //set Ruler Position
      $('.ruler').css({'marginLeft': 0 });
    },400);
    
    


    // $('.gedf-card[data-post-number="1"]').addClass('active');


    // console.log('setPercentageForRuler: '+this.total_SumAmount);
    // console.log(parseInt(setPercentageForRuler.toString()));

    // setTimeout(() => {

    //   let setPercentageForRuler = $('.gedf-card[data-post-number="1"]').attr('data-post-value') / this.total_SumAmount * 100;
    //   $('.ruler .pointer').css({ 'left': setPercentageForRuler+'%' });
    //   console.log('setPercentageForRuler ' + $('.gedf-card[data-post-number="1"]').attr('data-post-value'));
    //   console.log(this.total_SumAmount);
    // }, 400);


    console.log(console.log(plt.width()));
    console.log(console.log(plt.height()));
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
      this.totalAmount = this.Data[this.currentItem].totalAmount;

    }


console.log(  this.items)


  }

  createRuler(){
    $('.ruler').append('<div class="pointer" style="width:'+this.pointerWidth+'px"></div>');
    for(let r = 0;r<this.NumbersOfPosts;r++){
      let getHeight = this.Data[r].totalAmount /this. maxAmount * 100;
      var postnumber=r+1;
      $('.ruler').append('<div class="ruler-line" data-post-number="'+postnumber+'" style="height:'+getHeight+'%;width:'+this.pointerWidth+'px"></div>');
    }
  }

  ionViewWillEnter() {


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

          this.totalAmount = this.Data[this.currentItem - 1].totalAmount;
          this.rulerCalc('up');
          console.log('Doing up!!!');


        } else if (data.directionY == 'down'){

          this.rulerCalc('down');
          console.log('Doing Down!!!');

        }else {
          if (this.items.length == 12) {
            this.totalAmount = this.Data[this.currentItem - 1].totalAmount;
            // this.totalAmount = this.totalAmount - this.Data[this.currentItem - 1].Points;
          }
        }
      });


    })
  }

//every scroll
  onScroll(event) {

    let post = $('.gedf-card');
    let totalPost = this.Data.length;
    let setPercentage = 100 / totalPost + '%';

    // Get Active Class for Currnt Post
    $('.gedf-card').each(function () {
      let positionTop = $(this).position().top - 50;
      let positionBottom = positionTop + $(this).height();

      if ($('.scroll-content').scrollTop() >= positionTop && $('.scroll-content').scrollTop() <= positionBottom) {
        $(this).addClass('active').siblings().removeClass('active');
      }
    });

    // For Ruler Caculation
    let getActiveNumber = parseInt($('.gedf-card.active').attr('data-post-number'));
    this.currentItem = getActiveNumber;
    let getPercentage = $('.ruler-line[data-post-number="'+getActiveNumber+'"]').position().left + 1;
    
    // On scrolling set active class
    if ($('.scroll-content').scrollTop() > 10) {
      $('.ruler').addClass('fixed');
      $('.ruler .pointer').css({ 'left': getPercentage });
    }
    else {
      $('.ruler').removeClass('fixed');
      $('.ruler .pointer').css({ 'left': 0 });
    }

    

  }

  rulerCalc(position) {

   // this.linesPerScreen //= 44;
   // this.pointerWidth //= ( this.screenWidth / this.linesPerScreen )  - 1.2;
   // this.activePostNumber // = $('.gedf-card.active').attr('data-post-number');
    let getPos = parseFloat($('.ruler').css('marginLeft'));
    let halfScreen = $(window).width() / 4;
    let pointers = Math.floor(this.pointerWidth * 8);
    let getActiveNumber = parseInt($('.gedf-card.active').attr('data-post-number'));
    let applyPos;
    let minLines = this.linesPerScreen - 8;

    console.log('Lines/Screen : ' + this.linesPerScreen);

      // Motion of Ruler
      if(position === 'up'){
        if( getActiveNumber % 12 == 0 ){
          applyPos = getPos + pointers;
          $('.ruler').css({'marginLeft': applyPos });
        }
        else if(this.NumbersOfPosts == getActiveNumber && getActiveNumber > minLines){
          applyPos = getPos + pointers;
          $('.ruler').css({'marginLeft': applyPos });
        }
      }
      else if(position === 'down'){
        if( getActiveNumber % 8 == 0 && getActiveNumber > minLines){
          applyPos = getPos - pointers
          $('.ruler').css({'marginLeft': applyPos });
        }
      }

      

      //console.log(typeof getActiveNumber);
      //console.log(typeof position);
      let mod = getActiveNumber % 10 == 0;
      console.log('Modulas: '+ mod);
      console.log('pointers: '+ pointers);
      console.log('getActiveNumber: '+getActiveNumber);
      console.log('Get Pos: '+ getPos);
      console.log('Apply Position: '+ applyPos);

  }

//only for do more load data
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

        if (this.currentItem == 0) {
          this.totalAmount = this.Data[this.currentItem].totalAmount;
        } else {
          this.totalAmount = this.Data[this.currentItem - 1].totalAmount;
        }






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

  gotoCardIo() {
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


  gotoQrReader() {
    this.navCtrl.push(QrReaderPage)
  }
}
