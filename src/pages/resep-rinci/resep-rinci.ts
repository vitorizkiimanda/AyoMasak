import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-resep-rinci',
  templateUrl: 'resep-rinci.html',
})
export class ResepRinciPage {

  data: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
      this.data = this.navParams.data
      this.data.youtube = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.youtube);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResepRinciPage');
  }

}
