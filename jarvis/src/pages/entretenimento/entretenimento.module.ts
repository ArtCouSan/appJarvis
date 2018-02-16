import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntretenimentoPage } from './entretenimento';

@NgModule({
  declarations: [
    EntretenimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EntretenimentoPage),
  ],
})
export class EntretenimentoPageModule {}
