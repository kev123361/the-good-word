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

import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../pages/login/login';
import { DetailPageModule } from '../pages/detail/detail.module';
import { LoginPageModule } from '../pages/login/login.module';
import { PlaceholderInfoPageModule } from '../pages/placeholder-info/placeholder-info.module';
import { SearchResultPageModule } from '../pages/search-result/search-result.module';

export const firebaseConfig = {
  apiKey: "AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw",
	authDomain: "the-good-word.firebaseapp.com",
  databaseURL: "https://the-good-word.firebaseio.com",  
  projectId: "the-good-word",
  storageBucket: "the-good-word.appspot.com",
  messagingSenderId: "705962135776"
}

export const environment = {
  algolia: {
    appId: '3OSGQFKZY1',
    apiKey: '80f9fdda2d3b0e70074ba2b2815895cf',
    indexName: 'name',
    urlSync: false
  }
}

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DetailPageModule,
    LoginPageModule,
    PlaceholderInfoPageModule,
    SearchResultPageModule,
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
    SearchResultPage,
    LoginPage
  ],
  providers: [
    //Firebase,
    AngularFireDatabase,
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
