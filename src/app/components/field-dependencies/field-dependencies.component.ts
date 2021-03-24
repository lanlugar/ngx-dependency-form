import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { FormulaModalComponent } from '../formula-modal/formula-modal.component';

@Component({
  selector: 'app-field-dependencies',
  templateUrl: './field-dependencies.component.html',
  styleUrls: ['./field-dependencies.component.scss'],
})
export class FieldDependenciesComponent implements OnInit {
  @ViewChild(FormulaModalComponent, { static: false })
  dialog: FormulaModalComponent;
  showDependencies = false;
  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  showModal() {
    this.dialog.showDialog = true;
  }

  /**
   * @description the methods get control from parent and returns depencies formArray
   * @description see addField method in project-fields.component
   * @param arg gets an abstract control from controlcontainer inherited from parent
   * @returns formArray
   */
  getDependencies(arg: AbstractControl): FormArray {
    return arg.get('dependencyDetails').get('dependencies') as FormArray;
  }

  /**
   * @description add a depency to dependency fromArray.
   * @param fg gets the form array dependencies see template
   */
  addDependency(fg: FormArray) {
    fg.push(
      this.fb.group({
        id: this.fb.control(''),
        dependencyType: this.fb.control(''),
        dependencyEvent: this.fb.control(''),
        field: this.fb.control(''),
        condition: this.fb.control(''),
        conditionValue: this.fb.control(''),
        formula: this.fb.control(''),
      })
    );
  }
}
