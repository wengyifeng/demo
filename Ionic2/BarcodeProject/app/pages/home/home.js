import {Page, Platform, Alert, NavController} from 'ionic-angular';
 
@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    static get parameters() {
        return [[Platform], [NavController]];
    }
 
    constructor(platform, navController) {
        this.platform = platform;
        this.navController = navController;
    }
 
    scan() {
        this.platform.ready().then(() => {
            cordova.plugins.barcodeScanner.scan((result) => {
                this.nav.present(Alert.create({
                    title: "Scan Results",
                    subTitle: result.text,
                    buttons: ["Close"]
                }));
            }, (error) => {
                this.nav.present(Alert.create({
                    title: "Attention!",
                    subTitle: error,
                    buttons: ["Close"]
                }));
            });
        });
    }
}