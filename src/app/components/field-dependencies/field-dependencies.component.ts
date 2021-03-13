import { Component, OnInit, ViewChild } from '@angular/core';
import { FormulaModalComponent } from '../formula-modal/formula-modal.component';

@Component({
  selector: 'app-field-dependencies',
  templateUrl: './field-dependencies.component.html',
  styleUrls: ['./field-dependencies.component.scss'],
})
export class FieldDependenciesComponent implements OnInit {
  @ViewChild(FormulaModalComponent, { static: false })
  dialog: FormulaModalComponent;
  constructor() {}

  ngOnInit(): void {}

  showModal() {
    this.dialog.showDialog = true;
  }
}
