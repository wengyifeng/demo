import {Page, NavController,NavParams,Storage, LocalStorage} from 'ionic-angular';

/*
  Generated class for the SecondPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/second-page/second-page.html',
})
export class SecondPagePage {
  local: Storage;
  constructor(public nav: NavController,navParams: NavParams) {
    //this.myName = navParams.get('name');
    //this.myJob = navParams.get('job');
    this.local = new Storage(LocalStorage);
    this.local.get('didTutorial').then((result) => { console.log(result); });
    
  }
  
  backToPage() {
    this.nav.pop();
    
  }
}
