import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idle-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  navbarCollapsed = true;
  
  constructor() { }

  ngOnInit() {
  }

}
