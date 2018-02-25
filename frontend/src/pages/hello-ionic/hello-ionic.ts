import { Component } from '@angular/core';
import {PlaceholderInfoPage} from '../placeholder-info/placeholder-info';
import { NavController, NavParams} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
//import {Firebase} from '@ionic-native/firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // todayItems: any[];
  dataList: Observable<any[]>;
  
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase:AngularFireDatabase) {

    
    /* this.todayItems = [];
    this.todayItems.push({ID: 0, name: "Aliens vs. Zombies", details: "some details", time: "11:00PM", location: "COC", source: "https://www.google.com"});
    this.todayItems.push({ID: 1, name: "Volleyball", details: "some details2", time: "13:00PM", location: "CULC", source: "https://www.facebook.com"});
 */
    this.dataList = firebase.list('testdata').valueChanges();
    console.log(this.dataList);
    
    
  }

/*  buttonEvent(event, item) {
    this.navCtrl.push(PlaceholderInfoPage, {
      item: item
    });
  }*/


  itemSelected(item) {
    this.navCtrl.push(DetailPage, {item: item});
  }

}
