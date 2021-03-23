import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
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
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  showModal() {
    this.dialog.showDialog = true;
  }
}
