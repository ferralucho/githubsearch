import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '363d1d75159a4abfa84f7fdd0da255b4';
    private client_secret = 'a5254f5409dd463a8b06dd7e6060805f';

    constructor(private _http: Http){
        console.log('github service ready');
        this.username = 'ferralucho';
    }

    getUser(){
      return  this._http.get('http://api.github.com/users/' + this.username + '?client_id=' +this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
    }

    getRepos(){
        return  this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' +this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
      }

      updateUser(username: string){
        this.username = username;
      }
}