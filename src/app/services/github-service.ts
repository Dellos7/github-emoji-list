import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const githubBaseApiEmojiUrl = 'https://api.github.com/emojis';
 
@Injectable()
export class GithubService {
 
    constructor(private http:HttpClient) {}
 
    getEmojis() {
        return this.http.get( githubBaseApiEmojiUrl );
    }
}