import { ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { GenericValidator } from './generic-validator';

export abstract class ValidationForm implements AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  displayMessage: { [key: string]: string } = {};
  protected _form: FormGroup;
  protected _validationMessages: { [key: string]: { [key: string]: string } };
  protected _genericValidator: GenericValidator;

  get form(): FormGroup {
    return this._form;
  }
  // set in ngOnInit
  set form(val: FormGroup) {
    this._form = val;
  }
  // set in constructor
  set validationMessages(messages: { [key: string]: { [key: string]: string } }) {
    this._validationMessages = messages;

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this._genericValidator = new GenericValidator(this._validationMessages);
  }
  get errorCount(): number {
    if (this._genericValidator) {
      return this._genericValidator.getErrorCount(this._form);
    }
    return 0;
  }

  // must call super.ngAfterViewInit() if inheriting class implements AfterViewInit
  ngAfterViewInit(): void {
    this.initValidation();
  }

  protected initValidation(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this._form.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this._genericValidator.processMessages(this._form);
    });
  }
}
