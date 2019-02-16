import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idle-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = '@ng-idle';
  welcome = `welcome to ${this.title}`;

  constructor() { }

  ngOnInit() {
  }

}
