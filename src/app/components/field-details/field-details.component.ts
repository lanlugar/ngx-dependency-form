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
}
