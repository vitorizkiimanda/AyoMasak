import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  data: any;
  video : any = "https://www.youtube.com/embed/tKqUe53ItvU"

  tes = {
    deskripsi : "testesets",
    bahan : ["cabe","cabe2","cabe3"],
    alat : ["alat","alat2","alat3"]
  }


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
    this.data = this.navParams.data;  
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
