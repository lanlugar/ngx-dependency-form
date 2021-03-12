import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFieldsComponent } from './project-fields.component';

describe('ProjectFieldsComponent', () => {
  let component: ProjectFieldsComponent;
  let fixture: ComponentFixture<ProjectFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
