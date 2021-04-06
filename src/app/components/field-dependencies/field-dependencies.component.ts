import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormService } from 'src/app/services/form-service.service';
import { FormulaModalComponent } from '../formula-modal/formula-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-field-dependencies',
  templateUrl: './field-dependencies.component.html',
  styleUrls: ['./field-dependencies.component.scss'],
  entryComponents: [FormulaModalComponent],
})
export class FieldDependenciesComponent implements OnInit {
  showDependencies = false;

  //get fields and arithmeticfields observable from formservice
  fieldsObservable$: Observable<any[]> = this.fs.fieldsObservable;

  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder,
    private fs: FormService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  showModal() {
    const dialogRef = this.dialog.open(FormulaModalComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
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
        dependencyType: this.fb.control('validate'),
        dependencyEvent: this.fb.control('pre'),
        field: this.fb.control(''),
        condition: this.fb.control('hasAValue'),
        conditionValue: this.fb.control(''),
        formula: this.fb.control(''),
      })
    );
  }

  /**
   *
   * @param dp takes the depencies formArray
   * @returns true if it is empty else false
   */
  dependenciesEmpty(dp: FormArray): boolean {
    return dp.length === 0;
  }

  addBtnContent(dp: FormArray): string {
    return this.dependenciesEmpty(dp)
      ? 'Define new Dependency'
      : 'Add New Dependency';
  }

  getFieldOrder(fg: AbstractControl): number {
    return fg.get('fieldOrder').value;
  }

  getFieldType(fg: AbstractControl): string {
    return fg.get('inputType').value;
  }

  openDialog(): void {}
}
