import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudoPage } from './estudo';

@NgModule({
  declarations: [
    EstudoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstudoPage),
  ],
})
export class EstudoPageModule {}
