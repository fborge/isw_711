import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CourseComponent } from './course/course/course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';

import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes =[
  {
    path: '', component:CourseComponent
  },
  {
    path: 'add-course', component:AddCourseComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
