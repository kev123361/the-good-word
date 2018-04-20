import { Component, OnInit } from '@angular/core';
import {PlaceholderInfoPage} from '../placeholder-info/placeholder-info';
import { NavController, NavParams} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
//import {Firebase} from '@ionic-native/firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { SearchResultPage } from '../search-result/search-result';

import instantsearch from 'instantsearch.js'
import { searchBox } from 'instantsearch.js/es/widgets'
import { analytics } from 'instantsearch.js/es/widgets'
import {environment } from '../../environments/environment';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // todayItems: any[];
  dataList: Observable<any[]>;
  algoliaSearch: any;
  
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase:AngularFireDatabase) {

    
    /* this.todayItems = [];
    this.todayItems.push({ID: 0, name: "Aliens vs. Zombies", details: "some details", time: "11:00PM", location: "COC", source: "https://www.google.com"});
    this.todayItems.push({ID: 1, name: "Volleyball", details: "some details2", time: "13:00PM", location: "CULC", source: "https://www.facebook.com"});
 */
    this.dataList = firebase.list('testdata').valueChanges();
    console.log(this.dataList);
    
  }

  ngOnInit() {
    const options = environment.algolia;

    this.algoliaSearch = instantsearch(options);

    this.algoliaSearch.addWidget(
      searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Search for Events',
        magnifier: false,
        searchOnEnterKeyPressOnly: true,
        reset: false
      })
    );
    this.algoliaSearch.addWidget(
      analytics({
        pushFunction: (query, state, results) => {
          console.log(query)
          console.log(state)
          console.log(results)
          if (state.query !== '') {
            this.search(results.hits);
          }
        }
      })
    )

    this.algoliaSearch.start();
  }

  itemSelected(item) {
    this.navCtrl.push(DetailPage, {item: item});
  }

  search(item) {
    this.navCtrl.push(SearchResultPage, {item: item});
  }

}
