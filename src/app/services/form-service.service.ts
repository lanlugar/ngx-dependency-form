import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  /**
   *
   * Observables to be shared across components
   * fieldsObservable$ --> All fields array
   * arithmeticFieldsObservable$ --> All fields that are arithmetic
   * the observables are update in project-properties component
   */

  private fieldsObservable$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private arithmeticFieldsObservable$: BehaviorSubject<
    any[]
  > = new BehaviorSubject([]);

  constructor(private fb: FormBuilder) {}

  get fieldsObservable(): Observable<any[]> {
    return this.fieldsObservable$.asObservable();
  }

  get arithmeticFieldsObservable(): Observable<any[]> {
    return this.arithmeticFieldsObservable$.asObservable();
  }

  updateFieldsObservable(data: any[]) {
    this.fieldsObservable$.next(data);
  }

  updateArithmeticFieldsObservable(data: any[]) {
    this.arithmeticFieldsObservable$.next(data);
  }
}
