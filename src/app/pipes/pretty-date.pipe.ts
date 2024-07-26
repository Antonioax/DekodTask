import { Pipe, PipeTransform } from '@angular/core';
import { Months } from "../models/months";

@Pipe({
  name: 'prettyDate',
  standalone: true
})
export class PrettyDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '';
    let date = value.split("T")[0].split("-");
    let [year, month, day] = date;
    return `${day}. ${Months.get(+month)} ${year}.`;
  }

}
