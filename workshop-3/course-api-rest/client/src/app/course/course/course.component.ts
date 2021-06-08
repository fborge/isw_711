import { Component, OnInit } from '@angular/core';
import {CourseService} from 'src/app/service/course.service';
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:any;
  data:any;
  constructor(private courseService:CourseService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCourseData();
  }

  getCourseData(){
    this.courseService.getData().subscribe(res=>{
      this.courses=res;
    })
  }

  deleteData(id:any){
    this.courseService.deleteData(id).subscribe(res =>{
      this.data =res;
      this.toastr.error(JSON.stringify(this.data.name), JSON.stringify(this.data.message),
      {
        timeOut:1000,
        progressBar:true
      });
      this.getCourseData();
    });
  }
}
