import { Component } from '@angular/core';

@Component({
   /* selector:'.app-employee',
    selector:'[app-employee],*/
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styles: [`.add {
            background-color:blue;
        }`
    ]
})
export class EmployeeComponent {
 isDisable = true;
 name: string;
 nameList = [];
 isUserAddeddStatus = false;
  constructor() {
     setTimeout(() => {
         console.log(`set timeout`);
         this.isDisable = false;
     }, 5000);
 }

 addData(name) {
     console.log(name);
     this.nameList.push(name);
     console.table(this.nameList);
     this.isUserAddeddStatus =  true;
     this.name = '';
 }

 getColor() {
     return  this.isUserAddeddStatus ? 'white' : 'red';
 }
}
