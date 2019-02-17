import { AbstractControl, ValidatorFn } from '@angular/forms';

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

// @dynamic
export class FormValidators {
  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
        return { range: true };
      }
      return null;
    };
  }

  static restrictedWords(words: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(words)) {
        return null; // don't validate empty values to allow optional controls
      }
      const invalidWords = words
        .map(w => (control.value.includes(w) ? w : null))
        .filter(w => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(', ') }
        : null;
    };
  }
}
