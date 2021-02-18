import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {​​​​​​​​ FormsModule, ReactiveFormsModule }​​​​​​​​ from'@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CollegetoolbarComponent } from './component/collegetoolbar/collegetoolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommontoolbarComponent} from './component/commontoolbar/commontoolbar.component';
import { DepartmentsComponent } from './component/departments/departments.component';
import { VisionComponent } from './component/vision/vision.component';
import { AcademicsComponent } from './component/academics/academics.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ToolbarComponent,
    CollegetoolbarComponent,
    CommontoolbarComponent,
    DepartmentsComponent,
    VisionComponent,
    AcademicsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule, ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
