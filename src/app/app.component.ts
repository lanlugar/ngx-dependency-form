import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dependency Form';
  form = this.fb.group({
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

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(this.fields);
    });
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField() {
    this.fields.controls.push(this.createFromGroup());
  }

  private createFromGroup(): FormGroup {
    return this.fb.group({
      inputType: [''],
      name: [''],
    });
  }
}
