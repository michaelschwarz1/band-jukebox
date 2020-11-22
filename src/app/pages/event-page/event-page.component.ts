import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { JukeBoxEvent } from 'src/app/models/event-model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  constructor() { }
  events: JukeBoxEvent[] =
  [
    {
      name: 'LocalEvent',
      date: new Date('2020-12-24'),
      location: 'Berlin',
     imgUrl: 'https://www.lastminutemusicians.com/images/v5/og/ChristmasBands.jpg',
    description: 'Heavy Metal X-Mas Live Concert'},
  {
    name: 'OnlineEvent', date: new Date('2020-12-24'), location: 'Online',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwklv95BjfMs2BkpAytOIhPcvoeaVFZZGVg&usqp=CAU',
    description: 'Online XMas Party with the most popular band rudolf and the raindeers'
  }];
  ngOnInit(): void {
  }

}
