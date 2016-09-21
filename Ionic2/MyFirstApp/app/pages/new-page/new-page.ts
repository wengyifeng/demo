import {Page, Storage, SqlStorage} from 'ionic-angular';

/*
  Generated class for the NewPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-page/new-page.html',
})
export class NewPagePage {
  storage: Storage;
  constructor() {

  }
  saveData() {
    this.storage = new Storage(SqlStorage, { name: 'dbname6' });
     this.storage.query("SELECT * FROM people").then((data) => {
       console.log("SUCCESS41111 -> " + data.res.rows.item(0).firstname);
      }, (error) => {
        console.log("ERROR41111 -> " + JSON.stringify(error.err));
      });
  }

}
