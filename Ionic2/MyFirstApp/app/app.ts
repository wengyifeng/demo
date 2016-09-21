import {App, Platform, Page} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} 
})
export class MyApp {
  rootPage: any = HomePage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
