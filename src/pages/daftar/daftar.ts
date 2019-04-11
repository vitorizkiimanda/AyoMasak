import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class DaftarPage {

  email : any;
  password : any;
  nama : any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPage');
  }

  daftar(){
    if(this.email && this.password && this.nama)
    {
      if(this.password.length >= 8)
      {
        this.navCtrl.setRoot(TabsPage)
      }
      else{
        this.errorPassword()
      }
    }
    else {
      this.showConfirm()
    }
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Data tidak lengkap',
      message: 'isi nama, email dan password Anda',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  errorPassword() {
    const confirm = this.alertCtrl.create({
      title: 'Password Salah',
      message: 'Minimal 8 huruf',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
