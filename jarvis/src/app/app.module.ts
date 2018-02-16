import { TreinoPage } from '../pages/saude/treino/treino';
import { AguaPage } from '../pages/saude/agua/agua';
import { TrabalhoPage } from './../pages/trabalho/trabalho';
import { EntretenimentoPage } from './../pages/entretenimento/entretenimento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SaudePage } from './../pages/saude/saude';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EstudoPage } from '../pages/estudo/estudo';
import { TreinoAddPage } from '../pages/saude/treino/treino-add/treino-add';
import { DatabaseProvider } from '../providers/database/database';
import { AguaProvider } from '../providers/agua/agua';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SaudePage,
    EntretenimentoPage,
    TrabalhoPage,
    EstudoPage,
    AguaPage,
    TreinoPage,
    TreinoAddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SaudePage,
    EntretenimentoPage,
    TrabalhoPage,
    EstudoPage,
    AguaPage,
    TreinoPage,
    TreinoAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    AguaProvider
  ]
})
export class AppModule {}

