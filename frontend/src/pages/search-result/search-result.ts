import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {environment } from '../../environments/environment';

import {DetailPage} from '../detail/detail';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage implements OnInit {
  queryText: any;
  resultList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resultList = navParams.get('item');
  }

  ngOnInit() {
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

  itemSelected(item) {
    this.navCtrl.push(DetailPage, {item: item});
  }

}
