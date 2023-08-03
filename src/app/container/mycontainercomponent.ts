import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector:'App-container',
    templateUrl:'./mycontainer.component.html',
    styleUrls:['./mycontainer.component.css']

})
export class Containercomponent{

    constructor(public http: HttpClient){

    };

    getApi(){
        //return this.http.get('http://172.22.32.162:7001/WAMMasterSvc/getStates');
      return   this.http.get<any[]>(`http://ifmstest.rajasthan.gov.in/works/mst/v1.0/getStates`,{headers:{ 'Access-Control-Allow-Origin':'*','Content-Type':'application/json; charset=utf-8',
    'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI3OTU3YWMyZi02MDMzLTRkMzItYmYyNS02MWQ3MmViOGY2YjgiLCJleHAiOjE2ODk3NTE1OTksImlhdCI6MTY4OTc1MDM5OSwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.bnn9-1S1_GidW4FMPl0MVptzBhhZO8j37XlCYPNONiLJPjMl9i7PfyYDnpFR8qzIeP8TsZdBtGn3E6YK_JJgJU8rQEsvfPMh8S_Umx_rgcp5GX2SQT0RSWH8FvWuGC65IHmcxAhwsAwGul-psycqZ7kbfx6w7x4krqyVp55bwufl02c9x_6rADDMUNosTHUZVpqBBTIIIUqYVvoYmUIJltpLP-tqR5N8oRCyM4d7Ik6fAKuMYLwEqwFcBuXBgkJ2ynibemxHeHpNSNdSM8HsYoAIQ6wjTq8W3sy9zEwudrMWp-kjgxZw27uRmlaeTQDIkV69WPYiQVH4XXYm73UrTg'
  }});
    };

    ngOnInit(){
        //this.getApi().subscribe((data) => {
          //  console.warn("get api data", data);

        //})
    }


    
}