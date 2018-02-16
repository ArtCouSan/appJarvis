import { TreinoPage } from '../saude/treino/treino';
import { AguaPage } from '../saude/agua/agua';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-saude',
  templateUrl: 'saude.html',
})
export class SaudePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aguaPage(){
    this.navCtrl.push(AguaPage);
  }

  treinoPage(){
    this.navCtrl.push(TreinoPage);
  }
}
