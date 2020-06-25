import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(value).getFullYear();
    return currentYear - birthYear;
  }
}
