import { Keys } from './../../../Keys';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

    constructor(private http: Http){}

    getTrending(){
        return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${Keys.API_KEY}&limit=25&rating=G`)
                    .map(res => res.json())
                    .catch(err => Observable.throw(err))
    }
}