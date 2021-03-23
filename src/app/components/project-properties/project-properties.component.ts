import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-project-properties',
  templateUrl: './project-properties.component.html',
  styleUrls: ['./project-properties.component.scss'],
})
export class ProjectPropertiesComponent implements OnInit {
  @Input() form: FormGroup;
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
