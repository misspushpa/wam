import {Component ,OnInit} from '@angular/core';

@Component({
    selector:'app-Testcrud',
    templateUrl:'./Testcrud.component.html',
    styleUrls:['./Testcrud.component.scss']
})
export class TestcrudComponent implements OnInit{
    @viewChild('userform')  userform:NgForm;
    construct(){}
    ngOnInit(){}


   
    


}

