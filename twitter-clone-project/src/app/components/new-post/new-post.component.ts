import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  tweetMessage: string = "";
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  changeTweet(){
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }

  sendTweet(){
    alert("Twitter enviado com sucesso!");
  }
}
