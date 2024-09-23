import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

export interface MessageDTO {
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private socket$: WebSocketSubject<MessageDTO>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/ws');
  }

  // Send message to WebSocket server
  sendMessage(message: MessageDTO) {
    this.socket$.next(message);
  }

  // Receive message from WebSocket server
  getMessages(): Observable<MessageDTO> {
    return this.socket$.asObservable();
  }

  // Close WebSocket connection
  closeConnection() {
    this.socket$.complete();
  }
}
