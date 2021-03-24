import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { FieldDependenciesComponent } from '../field-dependencies/field-dependencies.component';
import { FieldDetailsComponent } from '../field-details/field-details.component';

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
    this.fields.push(
      this.fb.group({
        id: this.fb.control(''),
        form: this.fb.control(''),
        fieldOrder: this.fb.control(''),
        inputType: this.fb.control(''),
        option: this.fb.control('none'),
        defaultValue: this.fb.control(''),
        name: this.fb.control(''),
        dependencyDetails: this.fb.group({
          exists: this.fb.control(''),
          type: this.fb.control('and'),
          dependencies: this.fb.array([]),
        }),
      })
    );

    console.log(this.form);
  }

  onDetailsClicked(c: FieldDetailsComponent) {
    c.showDetails = c.showDetails ? false : true;
  }

  onDependenciesClicked(c: FieldDependenciesComponent) {
    c.showDependencies = c.showDependencies ? false : true;
  }
}
