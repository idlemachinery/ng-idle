import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'idle-common-feature',
  templateUrl: './common-feature.component.html',
  styleUrls: ['./common-feature.component.css']
})
export class CommonFeatureComponent implements OnInit {
  sampleString = ' hello world ';

  constructor() {}

  ngOnInit() {}
}
