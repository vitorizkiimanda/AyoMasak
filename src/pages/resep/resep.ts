import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resep',
  templateUrl: 'resep.html',
})
export class ResepPage {
  dataResep = [
    {
      id : 0,
      judul : "Nasi Goreng",
      deskripsi : "Nasi goreng spesial denganbumbu pilihan dan bahan alamai yang sehat",
      foto : "https://cdns.klimg.com/dream.co.id/resized/640x320/news/2018/10/25/95168/cara-membuat-nasi-goreng-1810254.jpg",
      favorit : false
    },
    {
      id : 1,
      judul : "Mie Ayam",
      deskripsi : "Mie Ayam asli Indonesia yang mewakili cita rasa nusantara",
      foto : "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_14-mie-ayam-kampung.jpg",
      favorit : false
    },
    {
      id : 2,
      judul : "Tongseng",
      deskripsi : "Makanan khas dari indonesia berupa perpaduan daing dan rempah remapahan pilihan",
      foto : "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Tongseng-kambing.jpg?fit=2803%2C2250&ssl=1",
      favorit : false
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResepPage');
  }

  ubahFav(data){
    this.dataResep[data.id].favorit = !this.dataResep[data.id].favorit 
  }

}
