import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from "../models/jobs";

@Pipe({
  name: 'prettyJob',
  standalone: true,
})
export class PrettyJobPipe implements PipeTransform {

  transform(job: string): string {
    return Jobs.get(job) || '#d9d9d9';
  }
}
