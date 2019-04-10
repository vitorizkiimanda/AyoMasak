import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profil-lain',
  templateUrl: 'profil-lain.html',
})
export class ProfilLainPage {

  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilLainPage');
  }

}
