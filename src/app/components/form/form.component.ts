import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Jobs } from '../../models/jobs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  allJobs = Jobs;

  formValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    selectedJob: null,
  };

  onSubmit(form: NgForm) {
    console.log('Form Submitted', this.formValues);
  }

  onReset(form: NgForm) {
    this.formValues = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      selectedJob: null,
    };
    form.reset(this.formValues);
  }
}
