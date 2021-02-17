import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CollegetoolbarComponent } from './component/collegetoolbar/collegetoolbar.component';
import { DepartmentsComponent } from './component/departments/departments.component';
import { VisionComponent } from './component/vision/vision.component';
import { AcademicsComponent } from './component/academics/academics.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"collegetool",component:CollegetoolbarComponent},
  {path:"department",component:DepartmentsComponent},
  {path:"vision",component:VisionComponent},
  {path:"academics",component:AcademicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
