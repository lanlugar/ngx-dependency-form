import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './services/form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dependency Form';
  form = this.fb.group({
    properties: this.fb.group({
      formId: [''],
      name: [''],
      type: [''],
      description: [''],
      copyright: [''],
      feature: ['point'],
    }),
    fields: this.fb.array([]),
    deletedFields: this.fb.array([]),
  });
  constructor(private formService: FormService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  get propertiesFormGroup(): FormGroup {
    return this.form.get('properties') as FormGroup;
  }

  get fieldFormArray(): FormArray {
    return this.form.get('fields') as FormArray;
  }
}
