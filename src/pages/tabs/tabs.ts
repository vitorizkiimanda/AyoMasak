import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BerandaPage } from '../beranda/beranda';
import { ResepPage } from '../resep/resep';
import { UploadPage } from '../upload/upload';
import { FavoritPage } from '../favorit/favorit';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BerandaPage;
  tab2Root = ResepPage;
  tab3Root = UploadPage;
  tab4Root = FavoritPage;
  tab5Root = ProfilPage;

  constructor() {

  }
}
