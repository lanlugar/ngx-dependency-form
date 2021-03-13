import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectPropertiesComponent } from './components/project-properties/project-properties.component';
import { ProjectFieldsComponent } from './components/project-fields/project-fields.component';
import { FieldDependenciesComponent } from './components/field-dependencies/field-dependencies.component';
import { FieldTypeComponent } from './components/field-type/field-type.component';
import { FieldDetailsComponent } from './components/field-details/field-details.component';
import { FormulaModalComponent } from './components/formula-modal/formula-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPropertiesComponent,
    ProjectFieldsComponent,
    FieldDependenciesComponent,
    FieldTypeComponent,
    FieldDetailsComponent,
    FormulaModalComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
