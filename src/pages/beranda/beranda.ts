import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { ProfilLainPage } from '../profil-lain/profil-lain';

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
      user_status : "Saya sudah berhasil memasak resep Nasi Goreng Spesial",
      user_email : "siti@gmail.com",
      user_telepon : "089612341234",
      user_rumah : "Bojong Gede",
      user_kerja : "Koki"
    },
    {
      user_nama : "Budi Woseto",
      user_photo : "https://i.imgur.com/4pigoji.jpg",
      user_status : "Saya sudah berhasil memasak resep Mie Kuah Spesial",
      user_email : "budi@gmail.com",
      user_telepon : "081367896789",
      user_rumah : "Cibinong",
      user_kerja : "Pesulap"
    },
    {
      user_nama : "Justin Knight",
      user_photo : "https://i.ytimg.com/vi/89D30f_9UK4/maxresdefault.jpg",
      user_status : "Sawya suka Free Fire !!",
      user_email : "justin@gmail.com",
      user_telepon : "081456175281",
      user_rumah : "Bogor Raya",
      user_kerja : "Pelari"
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  
  bukaProfil(data){
    this.app.getRootNav().push(ProfilLainPage, data)
  }

}
