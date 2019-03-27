import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPage } from '../status/status';

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {
  //ini Data-nya
  dataStatus = [
    {
      user_nama : "Siti Mainmumah",
      user_photo : "https://image.flaticon.com/icons/svg/1498/1498552.svg",
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial"
    },
    {
      user_nama : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial"
    },
    {
      user_nama : "Justin Knight",
      user_photo : "https://i.ytimg.com/vi/89D30f_9UK4/maxresdefault.jpg",
      user_status : "Sawya suka Free Fire !!"
    },
    {
      user_nama : "Siti Mainmumah",
      user_photo : "https://image.flaticon.com/icons/svg/1498/1498552.svg",
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial"
    },
    {
      user_nama : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial"
    },
    {
      user_nama : "Justin Knight",
      user_photo : "https://i.ytimg.com/vi/89D30f_9UK4/maxresdefault.jpg",
      user_status : "Sawya suka Free Fire !!"
    },
    {
      user_nama : "Siti Mainmumah",
      user_photo : "https://image.flaticon.com/icons/svg/1498/1498552.svg",
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial"
    },
    {
      user_nama : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial"
    },
    {
      user_nama : "Justin Knight",
      user_photo : "https://i.ytimg.com/vi/89D30f_9UK4/maxresdefault.jpg",
      user_status : "Sawya suka Free Fire !!"
    },
    {
      user_nama : "Siti Mainmumah",
      user_photo : "https://image.flaticon.com/icons/svg/1498/1498552.svg",
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial"
    },
    {
      user_nama : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial"
    },
    {
      user_nama : "Justin Knight",
      user_photo : "https://i.ytimg.com/vi/89D30f_9UK4/maxresdefault.jpg",
      user_status : "Sawya suka Free Fire !!"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  bukaStatus(data){
    this.navCtrl.push(StatusPage, data)
  }

}
