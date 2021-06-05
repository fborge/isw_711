import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  submitted=false;
  data:any;
  constructor(private courseService:CourseService, private formBuilder:FormBuilder) { }

  createForm(){
    this.form= this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      career: ['', Validators.required],
      credit: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }
  insertData(){
    this.submitted=true;
    
    if(this.form.invalid){
      return;
    }

    this.courseService.insertData(this.form.value).subscribe(res =>{
      this.data = res;
    })
  }
}
