import { Component, OnInit } from '@angular/core';
import {CourseService} from 'src/app/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:any;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourseData();
  }

  getCourseData(){
    this.courseService.getData().subscribe(res=>{
      this.courses=res;
    })
  }
}
