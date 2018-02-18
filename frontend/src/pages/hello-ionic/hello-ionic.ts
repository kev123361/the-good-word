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
  todayItems: any[];
  dataList: Observable<any[]>;
  
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase:AngularFireDatabase) {
    //this.items = createInitialItemList();
    // this.firebase.getToken()
    //   .then(token => console.log('The token is ${token}'))
    //   .catch(error => console.error('Error getting token'));
    
    // this.firebase.activateFetched()
    //   .then(result => {
    //     console.log(JSON.stringify(result));
    //     this.firebase.getValue("0")
    //     .then(data => {
    //       console.log(data);
    //     });
    //   });

    // this.firebase.onTokenRefresh()
    //   .subscribe((token: string) => console.log('Got a new token ${token}'));

    
    this.todayItems = [];
    this.todayItems.push({ID: 0, name: "Aliens vs. Zombies", details: "some details", time: "11:00PM", location: "COC", source: "https://www.google.com"});
    this.todayItems.push({ID: 1, name: "Volleyball", details: "some details2", time: "13:00PM", location: "CULC", source: "https://www.facebook.com"});

    this.dataList = firebase.list('data').valueChanges();
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
