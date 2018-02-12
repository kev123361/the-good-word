import { Component } from '@angular/core';
import {PlaceholderInfoPage} from '../placeholder-info/placeholder-info';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buttonEvent(event, item) {
    this.navCtrl.push(PlaceholderInfoPage, {
      item: item
    });
  }
}
