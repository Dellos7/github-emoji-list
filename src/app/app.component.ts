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
    let copied = this.copyTermToClipboardDeviceDependent( target, githubEmoji.term );
    this.createCustomAlert(!copied, githubEmoji);
  }

  copyTermToClipboardDeviceDependent( target: HTMLElement, term: string ) {
    let el = document.createElement("input");
    el.value = term;
    target.appendChild(el);
    
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let editable = el.contentEditable;
      let readOnly = el.readOnly;
      el.readOnly = true;
      let range = document.createRange();
      range.selectNodeContents(el);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      el.setSelectionRange(0, 999999);
      el.contentEditable = editable;
      //el.readOnly = readOnly;
    } 
    else {
      el.select();
    }
    let copied = document.execCommand('copy');
    el.blur();
    el.style.display = 'none';
    return copied;
  }

  createCustomAlert( error: boolean, githubEmoji: GithubEmoji ) {
    if( !error ) {
      let htmlAlertText = `<img style="width: 15px; height: 15px" src="${githubEmoji.imageUrl}">
                          Copied to clipboard: <i>${githubEmoji.term}</i>`;
      alertify.notify( htmlAlertText , 'custom', 5 );
    }
    else {
      alertify.error( 'Error copying to the clipboard.' );
    }
  }

}
