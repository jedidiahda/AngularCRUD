import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";

@Injectable() //decorator is require if class has dependencies
export class EmployeeService{
    private listEmployees: Employee[] =  [
        {
          id:1,
          name: 'Mark',
          gender: 'Male',
          preference: 'Email',
          email: 'mark@gmail.com',
          dateOfBirth: new Date('10/23/1998'),
          department:'1',
          isActive:true,
          photoPath:'assets/images/pic2.jpg',
        },
        {
          id:2,
          name: 'Mary',
          gender: 'Femail',
          preference: 'Phone',
          phoneNumber: 234567898,
          dateOfBirth: new Date('12/12/1998'),
          department:'2',
          isActive:true,
          photoPath:'assets/images/pic1.jpg',
    
        },{
          id:3,
          name: 'Jone',
          gender: 'Male',
          preference: 'Phone',
          phoneNumber:1363234323,
          dateOfBirth: new Date('10/23/1995'),
          department:'3',
          isActive:false,
          photoPath:'assets/images/pic3.jpg',
    
        }
      ];

    getEmployees(): Employee[]{
        return this.listEmployees;
    }

    getEmployee(id: number):Employee{
      return this.listEmployees.find(e=> e.id == id);
    }

    save(employee: Employee){
      this.listEmployees.push(employee);
    }
}