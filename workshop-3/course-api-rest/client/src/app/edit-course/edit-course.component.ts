import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CourseService} from 'src/app/service/course.service';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course= new Course();
  id:any;
  data:any;
  constructor(private courseService:CourseService, private route:ActivatedRoute, private toastr:ToastrService,  private router: Router) { }
  form=new FormGroup({
    name:new FormControl(''),
    code:new FormControl(''),
    career:new FormControl(''),
    credit:new FormControl(''),
  })

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.courseService.getDataById(this.id).subscribe(res=>{
      this.data = res;
      this.course= this.data;
            
      this.form= new FormGroup({
        name:new FormControl(this.course.name),
        code:new FormControl(this.course.code),
        career:new FormControl(this.course.career),
        credit:new FormControl(this.course.credit),
      })
    })
  }

  updateData(){
    this.courseService.updateData(this.id, this.form.value).subscribe(res=>{
      this.data=res;
      this.toastr.success(JSON.stringify(this.data.name),JSON.stringify(this.data.message)
      ,{
        timeOut:1000,
        progressBar:true
      });
      this.router.navigateByUrl('/');
    })
  }
}
