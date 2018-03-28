import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { tmdb_key } from '../../app/tmdb';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fakeResult : Result[];
 
  constructor(public navCtrl: NavController, public httpClient : HttpClient) {
    this.initializeResult();
    
  }  

  initializeResult(){
    this.fakeResult = [
      {title : 'alo', overview : 'auteur1', release_date :'1jan2018', poster_path:'url1'},
      {title : 'alia', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'batman', overview : 'auteur3', release_date :'2jan2018', poster_path:'url2'},
      {title : 'ijed', overview : 'auteur4', release_date :'2jan2018', poster_path:'url2'},
      {title : 'polai', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'lorem', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'sako', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'masa', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
      {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'}
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

  
  fetchResult(ev): Observable<Result[]>{
    let val = ev.target.value;
    const baseUrl = 'http://api.themoviedb.org/3/search/movie?'+'key='+tmdb_key+'&';
    return this.httpClient
    .get<Result[]>(baseUrl +'query=' + val).pluck('results');
  } 

}

export interface Result {
  title : string;
  overview : string;
  release_date : string;
  poster_path : string;
}


