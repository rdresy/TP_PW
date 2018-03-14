import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result : Result[];

  constructor(public navCtrl: NavController) {
    this.result = fakeResult;
    // this.initializeItems();
  }  

  searchQuery: string = '';
  // items: string[];

  // initializeItems() {
  // this.items = [
  //   'Amsterdam',
  //   'Bogota',
  // ];
  // }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();
    this.result;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.result = this.result.filter((result) => {
        return (result.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

export interface Result {
  title : string;
  author : string;
  date : string;
  image : string;
}


const fakeResult: Result[] = [
  {title : 'titre1', author : 'auteur', date :'1jan2018', image:'url1'},
  {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'}
]