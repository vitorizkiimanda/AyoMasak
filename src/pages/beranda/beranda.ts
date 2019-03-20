import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BerandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {

  dataStatus = [
    {
      user_id : "1",
      user_name : "Siti Mainmumah",
      user_photo : "https://image.flaticon.com/icons/svg/1498/1498552.svg",
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial"
    },
    {
      user_id : "2",
      user_name : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

}
