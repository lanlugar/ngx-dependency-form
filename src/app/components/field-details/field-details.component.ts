import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.scss'],
})
export class FieldDetailsComponent implements OnInit {
  form = this.formService.form;
  constructor(private formService: FormService) {}

  ngOnInit(): void {}
}
