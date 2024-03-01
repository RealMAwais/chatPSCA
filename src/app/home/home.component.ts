import { OnInit, Component } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  messages: Message[] = [];
  value: string | undefined;

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((value)=>{
      this.messages = this.messages.concat(value);
    })
  }
  sendMessage(){
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

}
