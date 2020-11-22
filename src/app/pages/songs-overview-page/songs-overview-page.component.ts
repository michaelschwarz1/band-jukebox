import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-songs-overview-page',
  templateUrl: './songs-overview-page.component.html',
  styleUrls: ['./songs-overview-page.component.css']
})
export class SongsOverviewPageComponent implements OnInit {
  songList: string[] = ['Santa Tell Me', 'Comming Home For Christmas', 'Silent Night', 'O Tannenbaum', 'All I want for Christmas Is you'];
  constructor() { }

  ngOnInit(): void {
  }

}
