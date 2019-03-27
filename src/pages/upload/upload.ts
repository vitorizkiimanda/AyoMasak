import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  dataUpload = [
    {
      foto : "https://cdns.klimg.com/dream.co.id/resized/640x320/news/2018/10/25/95168/cara-membuat-nasi-goreng-1810254.jpg",
    },
    {
      foto : "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_14-mie-ayam-kampung.jpg",  
    },
    {
      foto : "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Tongseng-kambing.jpg?fit=2803%2C2250&ssl=1",  
    },
    {
      foto : "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_14-mie-ayam-kampung.jpg",  
    },
    {
      foto : "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Tongseng-kambing.jpg?fit=2803%2C2250&ssl=1",  
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  tambahFoto(){
    alert("tambah foto")
  }

}
