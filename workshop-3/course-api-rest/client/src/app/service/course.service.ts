import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://localhost:3000/api/courses');
  }

  insertData(data: any){
    return this.httpClient.post('http://localhost:3000/api/courses', data);
  }

  getDataById(id:any){
    return this.httpClient.get('http://localhost:3000/api/courses?id='+id);
  }

  updateData(id:any, data:any){
    return this.httpClient.patch('http://localhost:3000/api/courses?id='+id, data);
  }
}
