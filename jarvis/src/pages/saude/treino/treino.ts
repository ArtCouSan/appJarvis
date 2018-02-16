import { TreinoAddPage } from '../treino/treino-add/treino-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-treino',
  templateUrl: 'treino.html',
})
export class TreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addTreinoPage(){
    this.navCtrl.push(TreinoAddPage);
  }

}
