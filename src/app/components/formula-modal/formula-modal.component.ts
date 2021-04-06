import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-formula-modal',
  templateUrl: './formula-modal.component.html',
  styleUrls: ['./formula-modal.component.scss'],
})
export class FormulaModalComponent implements OnInit {
  showDialog = false;
  // The raw string value this is has '@' to keep track of recent additions, just for editing.
  rawCalculatorText = '';
  // Final calculator value sent to the backend
  calculatorText = '';

  //arithmetic fields observable
  arithmeticFieldsObservable$: Observable<any[]> = this.fs
    .arithmeticFieldsObservable;

  fields: string[] = [];

  constructor(private fs: FormService) {}

  ngOnInit(): void {
    /*  this.arithmeticFieldsSubscription = this.arithmeticFieldsObservable$.subscribe(
      (fields) => {
        this.fields = fields;
      }
    ); */
  }

  closeModal(): void {
    this.showDialog = false;
  }

  onKeyButtonClick(value) {
    console.log(value);
    console.log(this.rawCalculatorText);
    this.rawCalculatorText +=
      this.rawCalculatorText === '' ? value : '@' + value;

    this.calculatorText = this.rawCalculatorText.replace(/@/g, '');
  }

  onUndoPress() {
    // remove the last added string
    const splitArray = this.rawCalculatorText.split('@');
    this.rawCalculatorText = splitArray
      .slice(0, splitArray.length - 1)
      .join('@');

    this.calculatorText = this.rawCalculatorText.replace(/@/g, '');
  }
}
