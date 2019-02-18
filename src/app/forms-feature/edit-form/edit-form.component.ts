import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationForm, FormValidators } from 'ng-idle-forms';

import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'idle-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent extends ValidationForm implements OnInit, AfterViewInit {
  pageTitle = 'ValidationForm Example';
  product: IProduct;
  get description() {
    // access the base FormGroup using this.form
    return this.form.get('description');
  }

  constructor(private fb: FormBuilder) {
    super();
    // you must initialize the validation messages in the constructor
    this.validationMessages = {
      name: {
        required: 'Name is required',
        minlength: 'Name must be at least three characters',
        maxlength: 'Name cannot exceed 10 characters'
      },
      price: {
        required: 'Price is required',
        range: 'Price must be between 1 and 1000'
      },
      description: {
        required: 'Description is required',
        maxlength: 'Description cannot exceed 100 characters',
        // handle restricted words on form to display found words
        // restrictedWords: 'A restricted word has been used'
      }
    };
  }

  ngOnInit() {
    // you must pass in the built FormGroup in ngOnInit
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      price: ['', [
        Validators.required,
        FormValidators.range(1, 1000)
      ]],
      description: ['', [
        Validators.required,
        Validators.maxLength(100),
        FormValidators.restrictedWords(['foo', 'bar'])
      ]]
    });
  }

  ngAfterViewInit() {
    // if implementing ngAfterViewInit you must call ngAfterViewInit
    // on the base class to initialize validation
    super.ngAfterViewInit();
  }

  save() {
    const i = { ...this.product, ...this.form.value };
    alert(`Item saved with values:\n${JSON.stringify(i)}`);
  }

  cancel() {
    this.form.reset();
    alert('Cancel clicked');
  }
}
