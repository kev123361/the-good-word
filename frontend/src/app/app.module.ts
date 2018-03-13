import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlaceholderInfoPage } from '../pages/placeholder-info/placeholder-info';

//import {Firebase } from '@ionic-native/firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SearchResultPage } from '../pages/search-result/search-result';

export const firebaseConfig = {
  apiKey: "AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw",
	authDomain: "the-good-word.firebaseapp.com",
  databaseURL: "https://the-good-word.firebaseio.com",  
  projectId: "the-good-word",
  storageBucket: "the-good-word.appspot.com",
  messagingSenderId: "705962135776"
}

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PlaceholderInfoPage,
    DetailPage,
    SearchResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PlaceholderInfoPage,
    DetailPage,
    SearchResultPage
  ],
  providers: [
    //Firebase,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
