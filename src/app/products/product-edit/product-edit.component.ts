import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ValidationForm, FormValidators } from 'ng-idle-forms';

import { IProduct } from '../../shared/interfaces';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent extends ValidationForm implements OnInit, AfterViewInit {
  pageTitle = 'Edit Product';
  errorMessage: string;
  private originalProduct: IProduct;
  product: IProduct;
  get description() {
    // access the base FormGroup using this.form
    return this.form.get('description');
  }
  get isDirty(): boolean {
    return this.form.dirty;
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    // you must initialize the validation messages in the constructor
    this.validationMessages = {
      name: {
        required: 'Name is required',
        minlength: 'Name must be at least three characters',
        maxlength: 'Name cannot exceed 25 characters'
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
        Validators.maxLength(25)
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

    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id === 'new') {
          id = '0';
        }
        this.getProduct(+id);
      }
    );
  }

  ngAfterViewInit() {
    // if implementing ngAfterViewInit you must call ngAfterViewInit
    // on the base class to initialize validation
    super.ngAfterViewInit();
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
        .subscribe(
            product => this.onProductRetrieved(product),
            error => this.errorMessage = JSON.stringify(<any>error)
        );
  }

  onProductRetrieved(product: IProduct): void {
    // Reset back to pristine
    this.form.reset();

    // Display the data in the form
    // Use a copy to allow cancel.
    this.originalProduct = product;
    this.product = Object.assign({}, product);

    if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
    } else {
        this.pageTitle = `Edit Product`;
    }

    this.form.patchValue({
      name: this.product.name,
      price: this.product.price,
      description: this.product.description
    });
  }

  delete(): void {
    if (this.product.id) {
      if (confirm(`Really delete the product: ${this.product.name}?`)) {
        this.productService.delete(this.product.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    } else {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    }
  }

  save(): void {
    if (this.form.valid) {
      const p = { ...this.product, ...this.form.value };
      this.productService.saveProduct(p)
        .subscribe(() => {
            // Assign the changes from the copy
            Object.keys(this.product).forEach(key =>
                this.originalProduct[key] = this.product[key]
            );
            this.onSaveComplete();
        },
        (error: any) => this.errorMessage = <any>error);
    } else {
        this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
      // Reset back to pristine
      this.form.reset(this.form.value);
      // Navigate back to the product list
      this.router.navigate(['/products']);
  }

  cancel(): void {
    // Navigate back to the product list
    this.router.navigate(['/products']);
  }
}
