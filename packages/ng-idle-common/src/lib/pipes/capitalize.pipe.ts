import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    if (value == null || value === '' || value !== value) {
      return null;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
