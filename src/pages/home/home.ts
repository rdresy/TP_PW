import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fakeResult : Result[];
 
  constructor(public navCtrl: NavController) {
    this.initializeResult();
    
  }  

  initializeResult(){
    this.fakeResult = [
      {title : 'alo', author : 'auteur1', date :'1jan2018', image:'url1'},
      {title : 'alia', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'batman', author : 'auteur3', date :'2jan2018', image:'url2'},
      {title : 'ijed', author : 'auteur4', date :'2jan2018', image:'url2'},
      {title : 'polai', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'lorem', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'sako', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'masa', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'},
      {title : 'titre2', author : 'auteur2', date :'2jan2018', image:'url2'}
    ] 
  }

  getItems(ev){
    this.initializeResult();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.fakeResult = this.fakeResult.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else
      return this.fakeResult = [];
  }


  gotoDetail(film: Result): void{
    this.navCtrl.push(DetailPage, film);
  }

  // public sendDetail(){
  //   this.navCtrl.push(DetailPage, {
  //     param1: 'John', param2: 'Johnson'
  // });
  // }
  

}

export interface Result {
  title : string;
  author : string;
  date : string;
  image : string;
}


