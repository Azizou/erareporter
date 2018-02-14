import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  //This could be filled by parsing a config file
  constructor(public navCtrl: NavController) {
    this.items =[
      {
        id: 1,
        text: 'Productions',
        description: 'Information on what was produce on a particular day. Could also record any defects/loss'
      },
      {
        id: 2,
        text: 'Sales',
        description: 'Dayly sales. This has no cash involvment. It could additionally include customer info to coordinte debts/payments'
      },{
        id: 3,
        text: 'Purchases',
        description: 'Anything we bought. This is recorded on daily basis but need not be done every day. Type or purchase and amount are required'
      }
    ];
    // for(let i = 0; i< 10; i++) {
    //   this.items.push({
    //     text: "Item " + i,
    //     id: i
    //   })
    // }
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage, {item})
  }

}
