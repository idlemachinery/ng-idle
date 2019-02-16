import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {
  // From: https://stackoverflow.com/questions/41873893/angular2-autofocus-input-element
  private _autofocus: any;

  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      // For SSR (server side rendering) this is not safe.
      // Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
      this.el.nativeElement.focus();
    }
  }
}
