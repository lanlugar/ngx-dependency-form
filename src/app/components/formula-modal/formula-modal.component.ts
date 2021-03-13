import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formula-modal',
  templateUrl: './formula-modal.component.html',
  styleUrls: ['./formula-modal.component.scss'],
})
export class FormulaModalComponent implements OnInit {
  showDialog = false;

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.showDialog = false;
  }
}
