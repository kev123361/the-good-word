import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {environment } from '../../environments/environment';

import instantsearch from 'instantsearch.js'
import { searchBox } from 'instantsearch.js/es/widgets'
//import { hits } from 'instantsearch.js/es/widgets'
import { analytics } from 'instantsearch.js/es/widgets'

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
    /* const options = environment.algolia;

    this.search = instantsearch(options);

    this.search.addWidget(
      searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'placeholder',
        magnifier: false,
        searchOnEnterKeyPressOnly: true,
        reset: false
      })
    ); */

    /* this.search.addWidget(
      hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: '<strong>Result {{objectID}}</strong>: {{{_highlightResult.name.value}}}'
        }
      })
    ); */

    /* this.search.addWidget(
      analytics({
        pushFunction: (query, state, results) => {
          console.log(query)
          console.log(state)
          console.log(results)
          this.resultList = results.hits;
        }
      })
    )

    this.search.start(); */
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

}
