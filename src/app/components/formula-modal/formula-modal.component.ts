import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-formula-modal',
  templateUrl: './formula-modal.component.html',
  styleUrls: ['./formula-modal.component.scss'],
})
export class FormulaModalComponent implements OnInit {
  showDialog = false;

  //arithmetic fields observable
  arithmeticFieldsObservable$: Observable<any[]> = this.fs
    .arithmeticFieldsObservable;

  constructor(private fs: FormService) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.showDialog = false;
  }
}
