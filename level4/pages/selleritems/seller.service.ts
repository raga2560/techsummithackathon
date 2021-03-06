import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SellerItemModel } from './seller.model';

@Injectable()
export class SellerService {
  constructor(public http: Http) {}
/*

  getPosts(): Promise<FeedPostModel[]> {
    return this.http.get('./assets/example_data/feed.json')
               .toPromise()
               .then(response => response.json().feed as FeedPostModel[])
               .catch(this.handleError);
  } 
*/
  getSellerItem(): any {
    return this.http.get('./assets/example_data/selleritems.json').map(res => res.json().selleritems);
               
  }
  
   
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 
}
