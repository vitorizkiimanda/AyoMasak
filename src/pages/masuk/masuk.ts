import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-masuk',
  templateUrl: 'masuk.html',
})
export class MasukPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukPage');
  }

  //ini fungsi , seperti matematika f(x)= x + y
  pindah(){
    this.navCtrl.push(DaftarPage)
  }

  masuk(){
    this.navCtrl.setRoot(TabsPage)
  }

}
