import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Contact, ContactField, ContactName, Contacts } from '@ionic-native/contacts';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {
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

  constructor(private contacts: Contacts, private sanitizer: DomSanitizer) {
    this.contacts.find(
      ["displayName", "phoneNumbers","photos"],
      {multiple: true, hasPhoneNumber: true}
      ).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          if(contacts[i].displayName !== null) {
            var contact = {};
            contact["name"]   = contacts[i].displayName;
            contact["number"] = contacts[i].phoneNumbers[0].value;
            if(contacts[i].photos != null) {
              console.log(contacts[i].photos);
              contact["image"] = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
              console.log(contact);
            } else {
              contact["image"] = "assets/imgs/female-avatar-150x150.png";
            }
            this.contactList.push(contact);
          }
        }
    });
  }

  contactList = [];

  /*getContacts(): void {
    this.contacts.find(
      ["displayName", "phoneNumbers","photos"],
      {multiple: true, hasPhoneNumber: true}
      ).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          if(contacts[i].displayName !== null) {
            var contact = {};
            contact["name"]   = contacts[i].displayName;
            contact["number"] = contacts[i].phoneNumbers[0].value;
            if(contacts[i].photos != null) {
              console.log(contacts[i].photos);
              contact["image"] = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
              console.log(contact);
            } else {
              contact["image"] = "assets/dummy-profile-pic.png";
            }
            this.contactList.push(contact);
          }
        }
    });
  }*/

  addContact(): void {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'Smith', 'John');
    let number = new ContactField('mobile', '6471234567');
    contact.phoneNumbers = [number];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }
}
