import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idle-http',
  template: `
    <p>
      http works!
    </p>
  `,
  styles: []
})
export class HttpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
