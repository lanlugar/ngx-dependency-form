import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent implements OnInit {
  showDetails = false;
  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  /**
   * @description The methods checks for the field type and returns either of default option, options or range
   * @param fieldType field type
   * @returns
   */

  getOptionsFormArray(arg: AbstractControl): FormArray {
    return arg.get('fieldOptions') as FormArray;
  }

  addOption(fa: FormArray) {
    const fieldOptionId = fa.length + 1;
    fa.push(
      this.fb.group({
        fieldOptionId: this.fb.control(fieldOptionId),
        value: this.fb.control(''),
      })
    );
  }

  showFieldTypeOptions(fieldType): string {
    if (['text', 'email', 'number'].includes(fieldType)) {
      return 'defaultValue';
    } else if (
      ['checkbox', 'radiobuttons', 'dropDownList'].includes(fieldType)
    ) {
      return 'options';
    } else if (fieldType === 'audio') {
      return 'range';
    } else if (fieldType === 'date') {
      return 'date';
    }

    return 'none';
  }
}
