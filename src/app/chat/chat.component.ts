import {Component} from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'chat',
  templateUrl: 'chat.template.html',
  providers: [ChatService]
})
export class ChatComponent {
	messageText: string;
	messages: Array<any>;

	constructor(private _chatService: ChatService) {}
	
	ngOnInit() {
		this.messages = new Array();
		

		this._chatService.on('userMessage', (msg) => {
			this.messages.push(msg);
		});

		this._chatService.on('chatMessage', (msg) => {
			this.messages.push(msg);
		});
	}

	sendMessage() {
		var message = {
			text: this.messageText,
			user:'59ad50523895fb08c8bc9c7c'
		};

		this._chatService.emit('chatMessage', message);
		this.messageText = ''
	}

	ngOnDestroy() {
		this._chatService.removeListener('chatMessage');
	}
}