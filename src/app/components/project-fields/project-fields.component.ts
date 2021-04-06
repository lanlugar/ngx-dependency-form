import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
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

  /**
   * @description add a new field to form
   * @var fieldOrder calculates the field order and adds automatically
   */
  addField() {
    const fieldOrder = this.fields.length + 1;
    this.fields.push(
      this.fb.group({
        id: this.fb.control(null),
        form: this.fb.control(''),
        fieldOrder: this.fb.control(fieldOrder),
        inputType: this.fb.control('text'),
        option: this.fb.control('none'),
        defaultValue: this.fb.control(''),
        duration: this.fb.control(''),
        name: this.fb.control(''),
        dependencyDetails: this.fb.group({
          exists: this.fb.control(''),
          type: this.fb.control('and'),
          dependencies: this.fb.array([]),
        }),
        fieldOptions: this.fb.array([]),
      })
    );
  }

  onDetailsClicked(c: FieldDetailsComponent) {
    c.showDetails = c.showDetails ? false : true;
  }

  onDependenciesClicked(c: FieldDependenciesComponent) {
    c.showDependencies = c.showDependencies ? false : true;
  }

  drop(event: CdkDragDrop<string[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const fields = this.form.get('fields') as FormArray;
    //get control
    const movedControl = fields.at(previousIndex);
    // remove the control
    fields.removeAt(previousIndex);
    // add at new index
    fields.insert(currentIndex, movedControl);

    // update fieldOrders of all fields;
    const controls = fields.controls;
    controls.forEach((ctrl: AbstractControl, idx: number) => {
      ctrl.patchValue({ fieldOrder: idx + 1 });
    });
  }
}
