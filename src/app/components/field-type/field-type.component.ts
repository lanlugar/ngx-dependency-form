import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss'],
})
export class FieldTypeComponent implements OnInit {
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter();
  @Output() dependencyClicked: EventEmitter<any> = new EventEmitter();

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  toggleDetails() {
    this.detailsClicked.emit();
  }

  toggleDependencies() {
    this.dependencyClicked.emit();
  }
}
