import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OriginalComponent } from './original/original.component';

import { GridTestComponent } from './grid-test/grid-test.component';

import { PageExempleComponent } from './page-exemple/page-exemple.component';

import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';

import { UsernameComponent } from './username/username.component';
import { SuccessComponent } from './students/success/success.component';
import { WarningComponent } from './students/warning/warning.component';


@NgModule({
  declarations: [
    AppComponent,
    GridTestComponent,
    OriginalComponent,
    PageExempleComponent,
    UsernameComponent,
    StudentsComponent,
    StudentComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
