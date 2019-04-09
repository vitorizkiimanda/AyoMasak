import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ResepRinciPage } from '../resep-rinci/resep-rinci';

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
      favorit : false,
      bahan : [
        "Nasi",
        "Telur",
        "Ayam",
        "Cabai",
        "Bawang"
      ],
      alat : [
        "Wajan",
        "Kompor",
        "Sodet"
      ],
      caraMasak : [
        "Siapkan nasi",
        "Goreng nasi campurkan dengan bawang",
        "Masukkan cabai dan telur",
        "Haduk hingga merata",
        "selesai, siap dihidangkan"
      ],
      youtube : "https://www.youtube.com/embed/znCSG8-f1_E"
    },
    {
      id : 1,
      judul : "Mie Ayam",
      deskripsi : "Mie Ayam asli Indonesia yang mewakili cita rasa nusantara",
      foto : "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_14-mie-ayam-kampung.jpg",
      favorit : false,
      bahan : [
        "Mie basah atau mie telor 500 g",
        "Daging ayam 300 g",
        "Minyak ayam 500 ml",
        "Bawang putih 4 siung",
        "Bawang merah 4 buah",
        "Kunyit seruas jari",
        "Kemiri 4 butir",
        "Jahe 1 ruas",
        "Air rebusan daging ayam 2 L",
        "Lada bubuk 1 sdt",
        "Garam 1 sdt",
        "Tulang ayam secukupnya"
      ],
      alat : [
        "Wajan",
        "Kompor",
        "Sumpit"
      ],
      caraMasak : [
        "Pertama, buat kuah kaldu mie ayam terlebih dahulu, yaitu dengan merebus lagi air rebusan daging ayam ditambahkan dengan lada bubuk, garam, dan tulang ayam secukupnya.",
        "Kedua, membuat toping ayam.",
        "Ayam yang telah direbus kemudian di potong kecil-kecil atau potong halus.",
        "Haluskan bumbu yang terdiri dari bawang putih, bawang merah, ketumbar, kunyit, kemiri, dan jahe.",
        "Tumis ayam dengan bumbu yang telah dihaluskan.",
        "Tambahkan garam dan penyedap rasa secukupnya.",
        "Setelah kuah mie ayam dan toping ayam siap, rebus mie yang sudah disiapkan.",
        "Saat merebus mie, siapkan mangkuk.",
        "Kemudian tambahkan 1 sdm minyak ayam dan 1 sdt merica.",
        "Masukkan mie yang telah matang ke dalam mangkuk.",
        "Kemudian aduk mie hingga tercampur sempurna dengan minyak ayam.",
        "Tambahkan toping ayam dan kuah ayam.",
        "Mie ayam siap disajikan."
      ],
      youtube : "https://www.youtube.com/embed/Rk4dxB7XNiQ"
    },
    {
      id : 2,
      judul : "Tongseng",
      deskripsi : "Makanan khas dari indonesia berupa perpaduan daing dan rempah remapahan pilihan",
      foto : "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Tongseng-kambing.jpg?fit=2803%2C2250&ssl=1",
      favorit : false,
      bahan : [
        "500 gram daging ayam",
        "100 ml santan kelapa kental",
        "2 gelas besar air",
        "2 buah tomat hijau (belah 4)",
        "1/2 bungkul kol (kubis putih)",
        "1 batang daun bawang",
        "1 lembar daun jeruk",
        "Kecap manis (secukupnya)",
        "Lada bubuk (secukupnya, sesuai selera)",
        "1 batang serai (memarkan)",
        "7 siung bawang merah",
        "4 siung bawang putih3 butir kemiri",
        "15 buah cabai rawit",
        "Ketumbar (secukupnya, haluskan)",
        "Garam (secukupnya)",
        "Gula (secukupnya)",
        "Kaldu ayam bubuk (secukupnya)"
      ],
      alat : [
        "Wajan",
        "Kompor",
        "Sodet"
      ],
      caraMasak : [
        "Cuci daging ayam hingga bersih, potong kecil-kecil sesuai selera.",
        "Haluskan bawang merah, bawang putih, kemiri, cabai dan ketumbar, tumis hingga harum.",
        "Masukkan daging ayam ke dalam tumisan bumbu, tambahkan batang serai, daun jeruk dan air secukupnya. ",
        "Tambahkan garam, gula dan lada bubuk, masak hingga ayam berwarna putih dan mendekati matang. ",
        "Selanjutnya, masukkan bunga kol yang telah dipotong sesuai selera, buah tomat, daun bawang dan santan kelapa. ",
        "Masak hingga bumbu meresap, agar rasanya semakin sedap koreksi rasa, tambahkan kaldu ayam bubuk dan kecap manis secukupnya. ",
        "Angkat tongseng ayam yang telah matang, sajikan bersama nasi putih hangat, kerupuk dan taburan bawang merah goreng."
      ],
      youtube : "https://www.youtube.com/embed/R7dPZtsWZZI"
    }
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResepPage');
  }

  ubahFav(data){
    this.dataResep[data.id].favorit = !this.dataResep[data.id].favorit 
  }

  bukaRinci(data){
    this.app.getRootNav().push(ResepRinciPage, data)
  }

}
