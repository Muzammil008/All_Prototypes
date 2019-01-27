import { Component, ViewChild, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the TextinputfocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;

@IonicPage()
@Component({
  selector: 'page-textinputfocus',
  templateUrl: 'textinputfocus.html',
})
export class TextinputfocusPage {
  @ViewChild("scrollList")
  
  // content: Content;
  public htmlDiv = "<h1>Hello World</h1>";
  public pet: string = 'kittens';
  public searchTerm: string = '';
  public items: any[];
  public data: any = [
    { title: 'Amsterdam', avatar: 'marty-avatar.png' },
    { title: 'Amsdom', avatar: 'avatar-02.jpg' },
    { title: 'Bogota', avatar: 'avatar-01.jpg' },
    { title: 'Bogaas', avatar: 'avatar-02.jpg' }
  ];

  public checkItem = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  onScroll(){
   
  }
  
  ngAfterViewInit(){
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    //   alert("ngAfterViewInit");
    // });
  }

  ngOnInit(){
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    //   alert("ngOnInit");
    // });
  }

  ngOnChanges(){
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    // alert("ngOnChanges");
    // });
  }

  ionViewWillEnter() {
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    // alert("ionViewWillEnter");
    // });
  }

  ionViewDidEnter() {
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    //  alert("ionViewDidEnter");
    // });
  }

  ionViewCanEnter() {
    // $('.search-list').on("scroll", ".search-list--item.active", function(){
    //   alert("ionViewCanEnter");
    // });
    // alert('ionViewCanEnter');
    //if($('.search-list--item.active').length > 0) alert('ionViewCanEnter');
  }

  getClass() {
    if (this.checkItem == false) {
      return '';
    }
    else {
      return 'active'
    }
  }

  activeContent() {
    this.checkItem = true;
  }

  filterItems(searchTerm) {

    return this.data.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  clearAllList() {
    this.searchTerm = '';
  }

  imgUrl(url) {
    return '../../assets/imgs/' + url;
  }

  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
    ];
  }

  getItems(ev: any, searchTerm) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    console.log(val);

    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '' && val.length > 2) {
    //   this.items = this.data.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }

    /*if (val && val.trim() != '' && val.length !< 2) {
      this.items = this.data.filter((item) => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
    else if (val.trim() == '' && val.length < 2) {
      this.items.length = 0;
      console.log('checkCondition 2 : ');
    }*/

    return this.data.filter((item) => {
      return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}
