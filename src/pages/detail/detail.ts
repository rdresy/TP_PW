import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Result } from '../home/home';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  film : Result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.data;
  }




 

}
