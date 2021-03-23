import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-project-fields',
  templateUrl: './project-fields.component.html',
  styleUrls: ['./project-fields.component.scss'],
})
export class ProjectFieldsComponent implements OnInit {
  @Input() form: FormGroup;
  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField() {
    this.fields.controls.push(
      this.fb.group({
        id: this.fb.control(['']),
        form: this.fb.control(['']),
        filedOrder: this.fb.control(['']),
        inputType: this.fb.control(['']),
        defaultValue: this.fb.control(['']),
        name: this.fb.control(['']),
        dependencyDetails: this.fb.group({
          exists: this.fb.control(['']),
          type: this.fb.control(['']),
          dependencies: this.fb.array([]),
        }),
      })
    );

    console.log(this.fields);
  }
}
