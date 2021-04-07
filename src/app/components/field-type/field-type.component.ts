import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss'],
})
export class FieldTypeComponent implements OnInit {
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter();
  @Output() dependencyClicked: EventEmitter<any> = new EventEmitter();

  //form passed down, necessary to remove field
  @Input() form: FormGroup;

  //input that get the index of the field from the project fields
  @Input() fieldIndex: number;

  fieldTypeOptions: { value: string; displayValue: string }[] = [
    { value: 'text', displayValue: 'Textfield' },
    { value: 'email', displayValue: 'E-mail' },
    { value: 'password', displayValue: 'Password' },
    { value: 'checkbox', displayValue: 'Checkbox' },
    { value: 'radiobuttons', displayValue: 'Radio Buttons' },
    { value: 'dropDownList', displayValue: 'Dropdown List' },
    { value: 'date', displayValue: 'Date' },
    { value: 'number', displayValue: 'Number' },
    { value: 'barcode/qrcode', displayValue: 'Barcode / QRcode' },
    { value: 'audio', displayValue: 'Audio' },
    { value: 'image', displayValue: 'Image' },
  ];

  constructor(
    public controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  toggleDetails() {
    this.detailsClicked.emit();
  }

  toggleDependencies() {
    this.dependencyClicked.emit();
  }

  getFieldOrder(fg: AbstractControl): number {
    return fg.get('fieldOrder').value;
  }

  deleteField() {
    const fields = this.form.get('fields') as FormArray;
    const deletedField = fields.at(this.fieldIndex);
    const deletedFieldId = deletedField.get('id').value;
    fields.removeAt(this.fieldIndex);
    this.updateFieldOrder();

    // update deleted fields for editing form

    if (deletedFieldId !== null) {
      const deletedFields = this.form.get('deletedFields') as FormArray;
      deletedFields.push(this.fb.control(deletedFieldId));
    }
  }

  /**
   * update the fieldOrder when a field is deleted
   */
  private updateFieldOrder() {
    const fields = this.form.get('fields') as FormArray;
    const fieldsControls = fields.controls;
    fieldsControls.forEach((ctrl: FormGroup, idx) => {
      ctrl.patchValue({ fieldOrder: idx + 1 });
    });
  }
}
