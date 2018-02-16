import { DatabaseProvider } from './../providers/database/database';
import { EntretenimentoPage } from './../pages/entretenimento/entretenimento';
import { TrabalhoPage } from './../pages/trabalho/trabalho';
import { SaudePage } from './../pages/saude/saude';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { EstudoPage } from '../pages/estudo/estudo';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Saúde', component: SaudePage },
      { title: 'Estudo', component: EstudoPage },
      { title: 'Trabalho', component: TrabalhoPage },
      { title: 'Entretenimento', component: EntretenimentoPage },

    ];

    //Criando o banco de dados
    dbProvider.createDatabase()
    .then(() => {
      // fechando a SplashScreen somente quando o banco for criado
      this.openHomePage(splashScreen);
    })
    .catch(() => {
      // ou se houver erro na criação do banco
      this.openHomePage(splashScreen);
    });

  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
