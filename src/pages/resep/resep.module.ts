import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResepPage } from './resep';

@NgModule({
  declarations: [
    ResepPage,
  ],
  imports: [
    IonicPageModule.forChild(ResepPage),
  ],
})
export class ResepPageModule {}
