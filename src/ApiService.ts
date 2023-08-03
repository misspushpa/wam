import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  wamMasterUrl = 'http://172.22.32.162:7001/works/mst/v1.0';

   headers = new HttpHeaders({

    'Content-Type':'application/json; charset=utf-8',

    'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI0YzAxMjM4Zi0zZGVkLTQ5ZGEtYTk3Yy1kY2YxZTFhZjFhMmEiLCJleHAiOjE2ODk2NzU4OTYsImlhdCI6MTY4OTY3NDY5Niwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.yTsozApedRCCUjeOy9yw_kw15YT0IQIl6wQmSFEPJ8kmx4jrXoW0wr9dgY7H-E5BNO9dgkU3ugDHk6SKzrRJuaqa__UAHk1ZFb2MTkvynk_p9eP-02MtYDPXA5g4k6gq-81Z_JTmaOU-hx4GsJQRBLkaijNE78K9AXtgAXkEUPUyQXj0E0OtgQjeh8G0caMDfyHCQuk9yujkuJWIecIpZgQzDNFS_36UFv9hsb24Dt1X1lSMr4LgekHRcvE1ayuVcU8Q7ftLoBLI3JTf0bILwNDZhva-SH_vsbwI58H3wh-taFC0WfWpWUcAIlBItyuwOFPxsfApWuVUIt9tkgzVnA'

  });



  


requestOptions = { headers: this.headers };
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.wamMasterUrl}/getAllLevels`,{headers:{ 'Access-Control-Allow-Origin':'*','Content-Type':'application/json; charset=utf-8',
    'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI1OWJlYjMwMy00ODE1LTRhMDQtODMyZi02ZjA1MDE0NzQ3ZmIiLCJleHAiOjE2ODk2ODc5MDYsImlhdCI6MTY4OTY4NjcwNiwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.OCKi_6dE2AwEWspxQ33tZiU4WPncEdeCFIgD-7m_V29wFkJNaJcSGPuzvsUWl5fGbtHpw0VVksBVCLQXKEg5jfog-WitUwe98mQLrw07vH3GRACFdA_PSJcCtEXdfL5FD6Flh5EYtO4u1CxJXvNOk4jdx5t52RYSnl0O_gG-hS7kfkk3QUsucHJmG1rwuttuK1qZIeaHMe_789uscx2q0cMfCk7piizUdLfX4Urb5v2OB7NA_0F8Gxn3BjBNMK8mZVNJCiivZUr3TW8dSq0BegfqXuEU7iaItn9CSpBuczLgFqlPIZD8oEeh9BrLwNvTAXrxEdX74c3zkjbrLVU_UA'
  }});
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.wamMasterUrl}/posts/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.wamMasterUrl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.wamMasterUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.wamMasterUrl}/posts/${id}`);
  }
  getOfficesByParents(body:string): Observable<any[]> {
    return this.http.post<any[]>(`${this.wamMasterUrl}/getOfficesByDepartment`,body,{headers:{ 'Content-Type':'application/json; charset=utf-8',
      'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI0YzAxMjM4Zi0zZGVkLTQ5ZGEtYTk3Yy1kY2YxZTFhZjFhMmEiLCJleHAiOjE2ODk2NzU4OTYsImlhdCI6MTY4OTY3NDY5Niwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.yTsozApedRCCUjeOy9yw_kw15YT0IQIl6wQmSFEPJ8kmx4jrXoW0wr9dgY7H-E5BNO9dgkU3ugDHk6SKzrRJuaqa__UAHk1ZFb2MTkvynk_p9eP-02MtYDPXA5g4k6gq-81Z_JTmaOU-hx4GsJQRBLkaijNE78K9AXtgAXkEUPUyQXj0E0OtgQjeh8G0caMDfyHCQuk9yujkuJWIecIpZgQzDNFS_36UFv9hsb24Dt1X1lSMr4LgekHRcvE1ayuVcU8Q7ftLoBLI3JTf0bILwNDZhva-SH_vsbwI58H3wh-taFC0WfWpWUcAIlBItyuwOFPxsfApWuVUIt9tkgzVnA'
    } 
  
  });
  }

  getDepartmentsByLevel(body:string): Observable<any[]> {
    return this.http.post<any[]>(`${this.wamMasterUrl}/getDepartmentsByLevelId`,body,{headers:{ 'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*',
      'MpJwtToken':'MpJwtTokeneyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaWZtc3Rlc3QucmFqYXN0aGFuLmdvdi5pbiIsImF1ZCI6InRhcmdldFNlcnZpY2UiLCJqdGkiOiI0YzAxMjM4Zi0zZGVkLTQ5ZGEtYTk3Yy1kY2YxZTFhZjFhMmEiLCJleHAiOjE2ODk2NzU4OTYsImlhdCI6MTY4OTY3NDY5Niwic3ViIjoiSUZNU1RFU1QiLCJ1cG4iOiJJRk1TVEVTVCIsInByZWZlcnJlZF91c2VybmFtZSI6IklGTVMgVE9LRU4iLCJzc29JZCI6IklGTVMuVEVTVCIsImxldmVsVmFsdWVJZCI6bnVsbCwiZGlzcGxheU5hbWUiOiJJRk1TIFRFU1QiLCJyb2xlSWQiOiI0OCIsImxldmVsSWQiOiIyIiwicm9sZU5hbWUiOiJIb0QiLCJlbXBsb3llZUlkIjpudWxsLCJsZXZlbE5hbWUiOiJEZXB0IiwibGV2ZWxWYWx1ZUNvZGUiOm51bGwsInVzZXJJZCI6IjEiLCJhaWQiOiI1NzYyOSIsInRyZWFzQ29kZSI6bnVsbCwiZ3JvdXBzIjpbXX0.yTsozApedRCCUjeOy9yw_kw15YT0IQIl6wQmSFEPJ8kmx4jrXoW0wr9dgY7H-E5BNO9dgkU3ugDHk6SKzrRJuaqa__UAHk1ZFb2MTkvynk_p9eP-02MtYDPXA5g4k6gq-81Z_JTmaOU-hx4GsJQRBLkaijNE78K9AXtgAXkEUPUyQXj0E0OtgQjeh8G0caMDfyHCQuk9yujkuJWIecIpZgQzDNFS_36UFv9hsb24Dt1X1lSMr4LgekHRcvE1ayuVcU8Q7ftLoBLI3JTf0bILwNDZhva-SH_vsbwI58H3wh-taFC0WfWpWUcAIlBItyuwOFPxsfApWuVUIt9tkgzVnA'
    } 
  
  });
  }
}