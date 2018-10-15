import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id:1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/23/1998'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/pic2.jpg',
    },
    {
      id:2,
      name: 'Mary',
      gender: 'Femail',
      contactPreference: 'Phone',
      phoneNumber: 234567898,
      dateOfBirth: new Date('12/12/1998'),
      department:'HR',
      isActive:true,
      photoPath:'assets/images/pic1.jpg',

    },{
      id:3,
      name: 'Jone',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber:1363234323,
      dateOfBirth: new Date('10/23/1995'),
      department:'IT',
      isActive:false,
      photoPath:'assets/images/pic3.jpg',

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
