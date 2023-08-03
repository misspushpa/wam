import { Component,OnInit } from '@angular/core';
//import { ApiService } from 'src/ApiService';
//import{Component,OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
 // selector: 'deptid',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public http:HttpClient){

   
  };
  courses = [];
  deptArray:any=[];

  //title = 'wam';
//posts:any[]=[];
 // constructor(private apiService: ApiService) {
    //this.apiService.getPosts().subscribe((data: any[]) => {
     // this.posts = data;
     // this.levels = this.posts.RajIFMS.data;
      // console.log(this.levels);

      
     // });
     getApi(num:string){
      return   this.http.post<any[]>(`http://172.22.32.162:7890/works/mst/v1.0/getDepartmentsByLevelId`, JSON.stringify({

      "data": [
         {
             "query": {
                 "levelTypeId": ""+num
             }
         }
     ]
 }),{headers:{ 'Access-Control-Allow-Origin':'*','Content-Type':'application/json; charset=utf-8',
    'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzc29JZCI6IklGTVMuVEVTVCIsInN1YiI6IklGTVNURVNUIiwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImlzcyI6Imh0dHA6Ly9pZm1zdGVzdC5yYWphc3RoYW4uZ292LmluIiwibGV2ZWxOYW1lIjoiRGVwdCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJ1c2VySWQiOiIxIiwiYXVkIjoidGFyZ2V0U2VydmljZSIsInVwbiI6IklGTVNURVNUIiwibGV2ZWxJZCI6IjIiLCJyb2xlTmFtZSI6IkhvRCIsImFpZCI6IjU3NjI5IiwianRpIjoiZjM2NDU2OTUtYmVlMS00NTI4LTlhN2YtZGYzMzlkZTRiY2NiIiwiaWF0IjoxNjg5MjU2NDMxLCJleHAiOjE3MjA3OTI0MzF9.R21PM0fXJLHZuXYuFJKQpx9l1y22Oc1VLa09TqpAC6OfsA4CflnRuxqtTtq-Ra9il7-lQUNYbwpoAOfEFiy23gqXlA5PfX67Y3RRBpSXqCentHpLiVOVrZtN-7KIkBugyf87bKubYSlUtJrqfuljtat_2-lIxfOQea3TaZv49PFS3eNCn15wIWbQtgmKe1BGGr3ccEFNPj1NlHwHDFTjOSHsxngagVd3mUwU08y5AgtQbwCO1LAw5z8E2C8z9DhhlF-SuV7YnMDGQCu8oHutOQGtbTB6dbKE98PhsVba6DG8BHJ4lb2nB-_FKmryG6uLdyXnDVJviS_ZLI1k_f2V1g'
  }});
     }
     selectedLevelType:string="";
     selectedLevelName:string="";
     selectedLevelValueCode:string="";
     selectedLevelValueDesc:string="";
     selectedRoleId:string="";
     selectedRoleDes:string="";
     aid:string="";
     userid:string="";
     ssoid:string="";
     changeLevel(value: any) {
      this.selectedLevelType = value.target.value;
      this.getApi(this.selectedLevelType).subscribe((data) => {
        console.warn("get api data", data);
        this.deptArray= data;
    });
    console.warn(":", this.deptArray);
  }
  changeRoleId(value: any) {
    this.selectedRoleId = value.target.value;
    alert(this.selectedRoleId);
}
  }

