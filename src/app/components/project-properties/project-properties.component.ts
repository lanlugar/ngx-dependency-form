import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-project-properties',
  templateUrl: './project-properties.component.html',
  styleUrls: ['./project-properties.component.scss'],
})
export class ProjectPropertiesComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;

  formValueChangesSubscription: Subscription;
  constructor(
    public controlContainer: ControlContainer,
    private fs: FormService
  ) {}

  ngOnInit(): void {
    /**
     * On a any value change in the form
     * update fieldsObservables
     * @see src\app\services\form-service.service.ts
     * @description get all the fields adds a field string + the field order
     * @description separates the numeric fields from the rest.
     *
     */
    this.formValueChangesSubscription = this.form.valueChanges.subscribe(
      (value) => {
        const fields = value.fields.map((f) => 'field' + f.fieldOrder);
        const arithfields = value.fields
          .filter((f) => f.inputType === 'number')
          .map((f) => 'field' + f.fieldOrder);
        console.log(fields);
        this.fs.updateArithmeticFieldsObservable(arithfields);
        this.fs.updateFieldsObservable(fields);
      }
    );
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription.unsubscribe();
  }
}
