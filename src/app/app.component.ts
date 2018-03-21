import { GithubEmoji } from './models/GithubEmoji';
import { GithubService } from './services/github-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Github Emoji';
  githubEmojiList: GithubEmoji[];

  constructor (private githubService: GithubService) {
    this.githubEmojiList = [];
  }

  ngOnInit() {
    this.getEmojis();
  }

  getEmojis() { 
    this.githubService.getEmojis().subscribe(
      (data) => {
        for( let emoji in data ) {
          this.githubEmojiList.push( new GithubEmoji( ":" + emoji + ":", data[emoji] ) );
        }
      },
      (err) => {
        console.log('ERROR RETRIEVING GITHUB EMOJI LIST FROM API : ' + err);
      }
    );
  }

}
