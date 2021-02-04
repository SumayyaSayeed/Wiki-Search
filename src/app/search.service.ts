import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

   constructor(private httpClient : HttpClient) { }
    getGetResult(Data:string){
      return this.httpClient.get(
        'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=' +Data
        );
    }
}
