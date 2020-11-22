import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menue',
  templateUrl: './app-menue.component.html',
  styleUrls: ['./app-menue.component.css']
})
export class AppMenueComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
