import { Agua } from './../../../model/agua';
import { AguaProvider } from './../../../providers/agua/agua';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})
export class AguaPage {

  lista: any[] = [];
  model: Agua;

  constructor(public navCtrl: NavController, public navParams: NavParams, private aguaProvider: AguaProvider) {
  }

  ionViewDidEnter() {
    this.getAll();
  }

  getAll() {
    this.aguaProvider.getAll()
      .then((result: any[]) => {
        this.lista = result;
      });
  }

  updateMeta(x){
    var meta = parseInt(x, 10);
    this.aguaProvider.updateMeta(meta);
  }

  diminuir(x, agua){
      var remove = parseInt(x, 10);
      var y = parseInt(agua, 10);
      var total = y - remove;
      this.aguaProvider.updateAgua(total);
  }

  aumentar(x, agua){
   var adicionar = parseInt(x, 10);
    var y = parseInt(agua, 10);
    var total = y + adicionar;
    this.aguaProvider.updateAgua(total);
  }
  
}
