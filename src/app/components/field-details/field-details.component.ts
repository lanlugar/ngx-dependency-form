import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent implements OnInit {
  showDetails = false;
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  /**
   * @description The methods checks for the field type and returns either of default option, options or range
   * @param fieldType field type
   * @returns
   */

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
