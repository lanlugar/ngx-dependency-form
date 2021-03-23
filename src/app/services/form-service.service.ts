import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  depencyForm = this.fb.group({
    formId: [''],
    name: [''],
    type: [''],
    descripton: [''],
    copyright: [''],
    deleteFields: [[]],
    fields: this.fb.array([]),
    feature: [''],
  });

  constructor(private fb: FormBuilder) {}

  get form(): FormGroup {
    return this.depencyForm as FormGroup;
  }
}
