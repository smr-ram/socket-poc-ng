import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'socket-poc';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.receiveMsg();
  }

  sendMsg(event: any) {
    this.appService.sendMessage({content: 'Hello User'});
  }

  receiveMsg() {
    this.appService.getMessages().subscribe(res => {
      console.log(res);
    })
  }
}
