import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MasukPage } from '../pages/masuk/masuk';
import { DaftarPage } from '../pages/daftar/daftar';
import { BerandaPage } from '../pages/beranda/beranda';
import { ResepPage } from '../pages/resep/resep';
import { UploadPage } from '../pages/upload/upload';
import { FavoritPage } from '../pages/favorit/favorit';
import { ProfilPage } from '../pages/profil/profil';
import { StatusPage } from '../pages/status/status';
import { ResepRinciPage } from '../pages/resep-rinci/resep-rinci';
import { ProfilLainPage } from '../pages/profil-lain/profil-lain';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MasukPage,
    DaftarPage,
    BerandaPage,
    ResepPage,
    UploadPage,
    FavoritPage,
    ProfilPage,
    StatusPage,
    ResepRinciPage,
    ProfilLainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MasukPage,
    DaftarPage,
    BerandaPage,
    ResepPage,
    UploadPage,
    FavoritPage,
    ProfilPage,
    StatusPage,
    ResepRinciPage,
    ProfilLainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
