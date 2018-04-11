import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { tmdb_key } from '../../app/tmdb';

import { DetailPage } from '../detail/detail';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fakeResult : Result[];
  realResult : Observable<Result[]>;
 
  constructor(public navCtrl: NavController, public httpClient : HttpClient, private alertCtrl: AlertController) {
    //this.initializeResult();
   this.realResult = Observable.of([]); 
  }  

  // initializeResult(){
  //   this.fakeResult = [
  //     {title : 'alo', overview : 'auteur1', release_date :'1jan2018', poster_path:'url1'},
  //     {title : 'alia', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'batman', overview : 'auteur3', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'ijed', overview : 'auteur4', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'polai', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'lorem', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'sako', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'masa', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'},
  //     {title : 'titre2', overview : 'auteur2', release_date :'2jan2018', poster_path:'url2'}
  //   ] 
  // }

  getItems(ev){
    // this.initializeResult();
    let val = ev.target.value;
    this.realResult = val ? this.fetchResult(val) : Observable.of([]);
  }


  gotoDetail(film: Result): void{
    this.navCtrl.push(DetailPage, film);
  }

  
  fetchResult(val): Observable<Result[]>{
    // let val = ev.target.value;
    const baseUrl = 'http://api.themoviedb.org/3/search/movie?'+'api_key='+tmdb_key+'&';
    return this.httpClient
    .get<Result[]>(baseUrl +'query=' + val).pluck('results');
  } 

  private discoverMovie(): Observable<Result[]> {   
    const baseUrl = 'http://api.themoviedb.org/3/discover/movie?'+'api_key='+tmdb_key+'&primary_release_year=2018';
    return this.httpClient
    .get<Result[]>(baseUrl).pluck('results');
  }

  private showRandomMovieAlert(film :Result[]): void {
    const movie : Result = film[Math.floor(Math.random())];
    this.presentConfirm(movie);
    
  }

  presentConfirm(film : Result) {
    let alert = this.alertCtrl.create({
      title: film.title,
      message: film.overview,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Details',
          handler: () => {
            console.log('Details clicked');
            this.gotoDetail(film);
          }
        }
      ]
    });
    alert.present();
  }

}

export interface Result {
  title : string;
  overview : string;
  release_date : string;
  poster_path : string;
}


