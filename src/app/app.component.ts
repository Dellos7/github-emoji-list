import { GithubEmoji } from './models/GithubEmoji';
import { GithubService } from './services/github-service';
import { Component } from '@angular/core';

//Importado de node_modules en .angular-cli.json, lo declaramos así para poder usarlo
declare var alertify: any;

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

  copyTermToClipboard( event, githubEmoji: GithubEmoji ) {
    let target = event.currentTarget;
    //debugger;
    let textArea = document.createElement("textarea");
    textArea.value = githubEmoji.term;
    target.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let success = document.execCommand('copy');
    alertify.notify( '<img style="width: 15px; height: 15px" src="' + githubEmoji.imageUrl +'"> Copied to clipboard: <i>' + githubEmoji.term + '</i>', 'custom', 5 );
    textArea.style.display = 'none';
  }

}
