import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-topstate',
  templateUrl: './topstate.component.html',
  styleUrls: ['./topstate.component.scss']
})
export class TopstateComponent {
  title: any = 'call api in Angular';
  myData: any = [];


  constructor(public http: HttpClient) {

  };

  getApi() {
    return this.http.post(`http://ifmstest.rajasthan.gov.in/IFMSLandingService/getModuleRoleDtlByRoleIdAssignmentId`, {
      headers: {
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8',
        'MpJwtToken': 'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI2ZTNmZjhkMS1kYTY3LTQwZGYtYmVhYi05NDk1YTcwY2EzOGMiLCJleHAiOjE2ODk2ODcyOTEsImlhdCI6MTY4OTY4NjA5MSwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.Vq4Y0xQes6xj5hrhfdqqNAIgbZMepdnZYVsTb6Fv2g9jlDyWnDBz4dyhI1_KFRbgsighzWu4PQwKd9PjUkvU_gBVz-yUTRczZZuMMz_jrWeIsUpZJ2aVfLHqM7nl9ScKaDYZ-8M6cq1DE081zLRTKcLqqNN_4WpETQY0Zg6d_fQQGf-ut2dZvy3fhpxNOliawCqeJ3V2-R5qASKdSrX15nXOMReZ8nAl0nIRnAhDtYFwvcjDU180Chn1jH5QB6XZ8L7EpOzzdm1u-NK49MXPMSa0dpmNVW2SCXhaZ69anzTjtsGxbDwVd9ErIl2UJEaHXrbUrtHvdP3F43OqXdpClA'
      }
    });
  }

  ngOnInit() {
    this.getApi().subscribe(data => {
      this.myData = data;
      console.log(this.myData[0].state)
    })
  }

}
