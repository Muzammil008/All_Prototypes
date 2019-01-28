import { Component, ViewChild, NgZone, ElementRef, HostListener } from '@angular/core';
import { NavController, Platform, Content, Scroll, Nav } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { LoginPage } from '../login/login';
import { CardsliderPage } from '../cardslider/cardslider';
import { VisapagePage } from '../visapage/visapage';

import { QrReaderPage } from '../qr-reader/qr-reader';
import { CardIoPage } from '../card-io/card-io';
import { ContactListPage } from '../contact-list/contact-list';
import { AnimateIconsPage } from '../animate-icons/animate-icons';
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
  @ViewChild(Content) content: Content;
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
      "Points": 30,
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
      "totalAmount": 160,
      "title": "qui est esse", "Points": 40,
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "Id": 3,
      "Name": "Ali",
      "imgUrl": "assets/imgs/az.jpg",
      "DollarAmount": 5000,
      "PakAmount": 800000, 
      "Points": 20,
      "totalAmount": 180,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "Id": 4,
      "Name": "Zuhaib",
      "imgUrl": "assets/imgs/c.jpg",
      "DollarAmount": 4000,
      "PakAmount": 900000,
      "Points": 70,
      "totalAmount": 110,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "Id": 5,
      "imgUrl": "assets/imgs/e.jpg",
      "Name": "Muzammil",
      "DollarAmount": 5000,
      "PakAmount": 200000, 
      "Points": 40,
      "totalAmount": 70,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "Id": 6,
        "imgUrl": "assets/imgs/e.jpg",
        "Name": "Muzammil",
        "DollarAmount": 5000,
        "PakAmount": 200000, 
        "Points": 100,
        "totalAmount": 170,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "Id": 7,
        "Name": "Fahad",
        "imgUrl": "assets/imgs/a.jpg",
        "DollarAmount": 6000,
        "PakAmount": 300000,
        "totalAmount": 50,
        "title": "qui est esse", "Points": 120,
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "Id": 8,
        "Name": "Ali",
        "imgUrl": "assets/imgs/az.jpg",
        "DollarAmount": 5000,
        "PakAmount": 800000, 
        "Points": 20,
        "totalAmount": 140,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "Id": 9,
        "Name": "Zuhaib",
        "imgUrl": "assets/imgs/c.jpg",
        "DollarAmount": 4000,
        "PakAmount": 900000,
        "Points": 200,
        "totalAmount": 340,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "Id": 10,
        "imgUrl": "assets/imgs/e.jpg",
        "Name": "Muzammil",
        "DollarAmount": 5000,
        "PakAmount": 200000, 
        "Points": 100,
        "totalAmount": 240,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },




      {
        "Id": 1,
        "imgUrl": "assets/imgs/e.jpg",
        "Name": "Muzammil",
        "DollarAmount": 5000,
        "PakAmount": 200000,
        "Points": 30,
        "totalAmount": 210,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "Id": 2,
        "Name": "Fahad",
        "imgUrl": "assets/imgs/a.jpg",
        "DollarAmount": 6000,
        "PakAmount": 300000,
        "totalAmount": 170,
        "title": "qui est esse", "Points": 40,
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "Id": 3,
        "Name": "Ali",
        "imgUrl": "assets/imgs/az.jpg",
        "DollarAmount": 5000,
        "PakAmount": 800000, 
        "Points": 20,
        "totalAmount": 190,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "Id": 4,
        "Name": "Zuhaib",
        "imgUrl": "assets/imgs/c.jpg",
        "DollarAmount": 4000,
        "PakAmount": 900000,
        "Points": 70,
        "totalAmount": 120,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "Id": 5,
        "imgUrl": "assets/imgs/e.jpg",
        "Name": "Muzammil",
        "DollarAmount": 5000,
        "PakAmount": 200000, 
        "Points": 40,
        "totalAmount": 230,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
          "Id": 6,
          "imgUrl": "assets/imgs/e.jpg",
          "Name": "Muzammil",
          "DollarAmount": 5000,
          "PakAmount": 200000, 
          "Points": 100,
          "totalAmount": 330,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "Id": 7,
          "Name": "Fahad",
          "imgUrl": "assets/imgs/a.jpg",
          "DollarAmount": 6000,
          "PakAmount": 300000,
          "totalAmount": 280,
          "title": "qui est esse", "Points": 50,
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "Id": 8,
          "Name": "Ali",
          "imgUrl": "assets/imgs/az.jpg",
          "DollarAmount": 5000,
          "PakAmount": 800000, 
          "Points": 20,
          "totalAmount": 260,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "Id": 9,
          "Name": "Zuhaib",
          "imgUrl": "assets/imgs/c.jpg",
          "DollarAmount": 4000,
          "PakAmount": 900000,
          "Points": 200,
          "totalAmount": 60,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "Id": 10,
          "imgUrl": "assets/imgs/e.jpg",
          "Name": "Muzammil",
          "DollarAmount": 5000,
          "PakAmount": 200000, 
          "Points": 100,
          "totalAmount": 160,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },






        {
            "Id": 1,
            "imgUrl": "assets/imgs/e.jpg",
            "Name": "Muzammil",
            "DollarAmount": 5000,
            "PakAmount": 200000,
            "Points": 30,
            "totalAmount": 130,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "Id": 2,
            "Name": "Fahad",
            "imgUrl": "assets/imgs/a.jpg",
            "DollarAmount": 6000,
            "PakAmount": 300000,
            "totalAmount": 90,
            "title": "qui est esse", "Points": 40,
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "Id": 3,
            "Name": "Ali",
            "imgUrl": "assets/imgs/az.jpg",
            "DollarAmount": 5000,
            "PakAmount": 800000, 
            "Points": 20,
            "totalAmount":70,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "Id": 4,
            "Name": "Zuhaib",
            "imgUrl": "assets/imgs/c.jpg",
            "DollarAmount": 4000,
            "PakAmount": 900000,
            "Points": 70,
            "totalAmount": 140,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "Id": 5,
            "imgUrl": "assets/imgs/e.jpg",
            "Name": "Muzammil",
            "DollarAmount": 5000,
            "PakAmount": 200000, 
            "Points": 40,
            "totalAmount": 180,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
              "Id": 6,
              "imgUrl": "assets/imgs/e.jpg",
              "Name": "Muzammil",
              "DollarAmount": 5000,
              "PakAmount": 200000, 
              "Points": 100,
              "totalAmount": 280,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "Id": 7,
              "Name": "Fahad",
              "imgUrl": "assets/imgs/a.jpg",
              "DollarAmount": 6000,
              "PakAmount": 300000,
              "totalAmount": 230,
              "title": "qui est esse", "Points": 50,
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "Id": 8,
              "Name": "Ali",
              "imgUrl": "assets/imgs/az.jpg",
              "DollarAmount": 5000,
              "PakAmount": 800000, 
              "Points": 20,
              "totalAmount": 250,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
              "Id": 9,
              "Name": "Zuhaib",
              "imgUrl": "assets/imgs/c.jpg",
              "DollarAmount": 4000,
              "PakAmount": 900000,
              "Points": 200,
              "totalAmount": 450,
              "title": "eum et est occaecati",
              "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
              "Id": 10,
              "imgUrl": "assets/imgs/e.jpg",
              "Name": "Muzammil",
              "DollarAmount": 5000,
              "PakAmount": 200000, 
              "Points": 100,
              "totalAmount": 550,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },


            {
                "Id": 1,
                "imgUrl": "assets/imgs/e.jpg",
                "Name": "Muzammil",
                "DollarAmount": 5000,
                "PakAmount": 200000,
                "Points": 150,
                "totalAmount": 400,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "Id": 2,
                "Name": "Fahad",
                "imgUrl": "assets/imgs/a.jpg",
                "DollarAmount": 6000,
                "PakAmount": 300000,
                "totalAmount": 360,
                "title": "qui est esse", "Points": 40,
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "Id": 3,
                "Name": "Ali",
                "imgUrl": "assets/imgs/az.jpg",
                "DollarAmount": 5000,
                "PakAmount": 800000, 
                "Points": 20,
                "totalAmount":340,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
              },
              {
                "Id": 4,
                "Name": "Zuhaib",
                "imgUrl": "assets/imgs/c.jpg",
                "DollarAmount": 4000,
                "PakAmount": 900000,
                "Points": 70,
                "totalAmount": 410,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
              },
              {
                "Id": 5,
                "imgUrl": "assets/imgs/e.jpg",
                "Name": "Muzammil",
                "DollarAmount": 5000,
                "PakAmount": 200000, 
                "Points": 40,
                "totalAmount": 450,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                  "Id": 6,
                  "imgUrl": "assets/imgs/e.jpg",
                  "Name": "Muzammil",
                  "DollarAmount": 5000,
                  "PakAmount": 200000, 
                  "Points": 100,
                  "totalAmount": 350,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                  "Id": 7,
                  "Name": "Fahad",
                  "imgUrl": "assets/imgs/a.jpg",
                  "DollarAmount": 6000,
                  "PakAmount": 300000,
                  "totalAmount": 300,
                  "title": "qui est esse", "Points": 50,
                  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                  "Id": 8,
                  "Name": "Ali",
                  "imgUrl": "assets/imgs/az.jpg",
                  "DollarAmount": 5000,
                  "PakAmount": 800000, 
                  "Points": 20,
                  "totalAmount": 280,
                  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },
                {
                  "Id": 9,
                  "Name": "Zuhaib",
                  "imgUrl": "assets/imgs/c.jpg",
                  "DollarAmount": 4000,
                  "PakAmount": 900000,
                  "Points": 200,
                  "totalAmount": 80,
                  "title": "eum et est occaecati",
                  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                },
                {
                  "Id": 10,
                  "imgUrl": "assets/imgs/e.jpg",
                  "Name": "Muzammil",
                  "DollarAmount": 5000,
                  "PakAmount": 200000, 
                  "Points": 100,
                  "totalAmount": 180,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                  "Id": 6,
                  "imgUrl": "assets/imgs/e.jpg",
                  "Name": "Muzammil",
                  "DollarAmount": 5000,
                  "PakAmount": 200000, 
                  "Points": 100,
                  "totalAmount": 280,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                  "Id": 7,
                  "Name": "Fahad",
                  "imgUrl": "assets/imgs/a.jpg",
                  "DollarAmount": 6000,
                  "PakAmount": 300000,
                  "totalAmount": 230,
                  "title": "qui est esse", "Points": 50,
                  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                  "Id": 8,
                  "Name": "Ali",
                  "imgUrl": "assets/imgs/az.jpg",
                  "DollarAmount": 5000,
                  "PakAmount": 800000, 
                  "Points": 20,
                  "totalAmount": 250,
                  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },
                {
                  "Id": 9,
                  "Name": "Zuhaib",
                  "imgUrl": "assets/imgs/c.jpg",
                  "DollarAmount": 4000,
                  "PakAmount": 900000,
                  "Points": 200,
                  "totalAmount": 450,
                  "title": "eum et est occaecati",
                  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                },
                {
                  "Id": 10,
                  "imgUrl": "assets/imgs/e.jpg",
                  "Name": "Muzammil",
                  "DollarAmount": 5000,
                  "PakAmount": 200000, 
                  "Points": 100,
                  "totalAmount": 350,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }












  ];

  // Ruler
  public ruler = $('.ruler');
  public screenWidth = window.innerWidth;
  public NumbersOfPosts = this.Data.length;
  public maxAmounts = this.maxAmount;
  public linesPerScreen = 44;
  public pointerWidth = (this.screenWidth / this.linesPerScreen) - 1.2;
  public activePostNumber = $('.gedf-card.active').attr('data-post-number');
  maxpoint: number = this.Data[0].Points;


  ionViewDidLoad() {
    //alert("Did Load")
    this.maxAmount = this.Data[0].totalAmount;

    // Sum of All Items Amount - Sum Amount
    for (var i = 0; i < this.Data.length; i++) {
      this.total_SumAmount = this.total_SumAmount + this.Data[i].totalAmount;
    }

    // Get Max Value for totalAmount - Max Amount
    for (var i = 1; i < this.Data.length; i++) {
      if (this.maxAmount < this.Data[i].totalAmount) {
        this.maxAmount = this.Data[i].totalAmount;
      }
    }
    //console.log('maxAmount: ' + this.maxAmount);


    // Get Max Value for totalPoint - Max Point Value
    for (var i = 1; i < this.Data.length; i++) {
      if (this.maxpoint < this.Data[i].Points) {
        this.maxpoint = this.Data[i].Points;
      }
    }
    // console.log('maxpoint: ' + this.maxpoint);
    // $(window).on('load resize', function() {
    // });  

    setTimeout(() => {
      $('.ruler').empty();
      this.createRuler();
      //set Ruler Position
      $('.ruler').css({ 'marginLeft': 0 });
    }, 400);




    // $('.gedf-card[data-post-number="1"]').addClass('active');


    // console.log('setPercentageForRuler: '+this.total_SumAmount);
    // console.log(parseInt(setPercentageForRuler.toString()));

    // setTimeout(() => {

    //   let setPercentageForRuler = $('.gedf-card[data-post-number="1"]').attr('data-post-value') / this.total_SumAmount * 100;
    //   $('.ruler .pointer').css({ 'left': setPercentageForRuler+'%' });
    //   console.log('setPercentageForRuler ' + $('.gedf-card[data-post-number="1"]').attr('data-post-value'));
    //   console.log(this.total_SumAmount);
    // }, 400);


    if (this.plt.height() <= 800) {
      this.lastIndex = 1;
    } else if (this.plt.height() <= 1200) {
      this.lastIndex = 2;
    }
    else if (this.plt.height() <= 1400) {
      this.lastIndex = 3;
    }
    else if (this.plt.height() <= 1600) {
      this.lastIndex = 3;
    }
    else if (this.plt.height() <= 1800) {
      this.lastIndex = 3;
    }
    else if (this.plt.height() <= 2000) {
      this.lastIndex = 4;
    }
    else if (this.plt.height() <= 2200) {
      this.lastIndex = 5;
    }
    else {
      this.lastIndex = 2;
    }
    //console.log(this.lastIndex)

    // for (this.startIndex; this.startIndex < this.lastIndex; this.startIndex++) {

    //   this.items.push(this.Data[this.startIndex]);


    // }
    for (this.startIndex; this.startIndex < this.lastIndex; this.startIndex++) {

      this.items.push(this.Data[this.startIndex]);

      // this.totalAmount = this.totalAmount - 10;
      this.totalAmount = this.Data[this.currentItem].totalAmount;

    }


    ///console.log(this.items)



}

  constructor(public zone: NgZone, public plt: Platform, private CommunicatorProvider: CommunicatorProvider, public navCtrl: NavController) {
  
  }

  createRuler() {

    // Create Ruler Pointer
    $('.ruler').append('<div class="pointer" style="width:' + this.pointerWidth + 'px"></div>');
    
    // Add Ruler Lines in Ruler
    for (let r = 0; r < this.NumbersOfPosts; r++) {
      let getHeight = this.Data[r].Points / this.maxpoint * 100;
      var postnumber = r + 1;
      //ss
      $('.ruler').append('<div class="ruler-line" data-post-number="' + postnumber + '" style="height:' + getHeight + '%;width:' + this.pointerWidth + 'px"></div>');
    }

    $('.ruler-line').each(function (i) {
      let index = i + 1;
      if (index % 8 == 0) {
        $(this).addClass('brige');
      }
    });

  }


  ionViewWillEnter() {

    console.log("call method")
    this.content.ionScrollEnd.subscribe((data) => {
      //console.log(data)
      this.direction = data.directionY;
      this.zone.run(() => {
        if (data.directionY == 'up') {
          // if (data.scrollTop == 0) {
          //   this.totalAmount = 120;
          // }else{
          //   this.totalAmount = this.totalAmount + this.Data[this.currentItem - 1].Points;
          // }
          // console.log(this.currentItem);

       
          this.rulerCalc('up');
        //  console.log('Doing up!!!');
        //  this.totalAmount = this.Data[this.currentItem - 1].totalAmount;

        } else if (data.directionY == 'down') {

          this.rulerCalc('down');
          //console.log('Doing Down!!!');
         // this.totalAmount = this.Data[this.currentItem - 1].totalAmount;
        } else {
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
    let getScrollPosition = this.content.scrollTop;

    // Get Active Class for Currnt Post
    $('.gedf-card').each(function () {
      let positionTop = $(this).position().top - 50;
      let positionBottom = positionTop + $(this).height();

      if (getScrollPosition >= positionTop && getScrollPosition <= positionBottom) {
        $(this).addClass('active').siblings().removeClass('active');
      }

    });

    // For Ruler Caculation
    let getActiveNumber = parseInt($('.gedf-card.active').attr('data-post-number'));
    this.currentItem = getActiveNumber;
  

 
    let getPercentage = $('.ruler-line[data-post-number="' + getActiveNumber + '"]').position().left + 1;
var that=this;
    // On scrolling set active class
    if ( getScrollPosition > 10) {
      $('.ruler').addClass('fixed');
      $('.ruler .pointer').css({ 'left': getPercentage });
      $('.ruler-line').each(function (i) {
       // alert("scrolling set"

        if (getActiveNumber == parseInt($(this).attr('data-post-number'))) {
          that.totalAmount = that.Data[getActiveNumber - 1].totalAmount;
          //console.log(that.totalAmount)
          $(this).addClass('active').siblings().removeClass('active'); 
         // console.log($(this).addClass('active').siblings().removeClass('active'));
        }
      });

    }
    else {
      $('.ruler').removeClass('fixed');
      $('.ruler .pointer').css({ 'left': 0 });
    }



  }

  rulerCalc(position) {

    let getPos = parseFloat($('.ruler').css('marginLeft'));
    let halfScreen = $(window).width() / 4;
    let pointers = Math.floor(this.pointerWidth * 8);
    let getActiveNumber = parseInt($('.gedf-card.active').attr('data-post-number'));
    let applyPos;
    let minLines = this.linesPerScreen - 8;

    if (position === 'up') {
      //if($('.ruler-line.brige').hasClass('active') &&  getActiveNumber > minLines && this.NumbersOfPosts !== getActiveNumber )
      if ($('.ruler-line.brige').hasClass('active') && this.NumbersOfPosts !== getActiveNumber) {
        applyPos = ((getPos + pointers) > 0) ? applyPos = 0 : getPos + pointers;
        $('.ruler').css({ 'marginLeft': applyPos });
      }
    }
    else if (position === 'down') {
      if ($('.ruler-line.brige').hasClass('active') && getActiveNumber > minLines && this.NumbersOfPosts !== getActiveNumber) {
        applyPos = getPos - pointers
        $('.ruler').css({ 'marginLeft': applyPos });
      }
    }

    let mod = getActiveNumber % 10 == 0;

  }

  //only for do more load data
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    //console.log(infiniteScroll)


    return new Promise((resolve) => {
      setTimeout(() => {
        this.items.push(this.Data[this.lastIndex]);
       // console.log(this.items)
        this.lastIndex++;

        if (this.currentItem == 0) {
          this.totalAmount = this.Data[this.currentItem].totalAmount;
        } else {
          this.totalAmount = this.Data[this.currentItem - 1].totalAmount;
        }
  
        if (this.items.length >= this.Data.length) {
          infiniteScroll.enable(false);
          infiniteScroll.complete();
        } else {
          infiniteScroll.enable(true);
        }

      }, 300);
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

  gotoContactList(){
    this.navCtrl.push(ContactListPage)
  }
  gotoAnimateIcon(){
    this.navCtrl.push(AnimateIconsPage)
  }
}
