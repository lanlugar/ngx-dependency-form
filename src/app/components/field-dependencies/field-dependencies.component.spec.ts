import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDependenciesComponent } from './field-dependencies.component';

describe('FieldDependenciesComponent', () => {
  let component: FieldDependenciesComponent;
  let fixture: ComponentFixture<FieldDependenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDependenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
