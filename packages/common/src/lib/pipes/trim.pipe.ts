import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(value: any): any {
    if (value == null || value === '' || value !== value) {
      return null;
    }
    return value.trim();
  }
}
