import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/model/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id:null,
    name: null,
    gender:null,
    email:null,
    phoneNumber:null,
    preference:null,
    dateOfBirth:null,
    department:null,
    isActive:null,
    photoPath:null,
  }
  departments: Department[] = [
    {id:1,name:'Help Desk'},
    {id:2,name:'HR'},
    {id:3,name:'IT'},
    {id:4,name:'Paroll'},
  ];

  constructor(private _employeeService: EmployeeService,
              private _router: Router) { 
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'them-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2018,0,1),
      maxDate: new Date(2018,11,31),
      dateInputFormat: 'DD/MM/YYYY',

    });

  }

  ngOnInit() {
  }

  /*saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }*/
  saveEmployee(): void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
    
  }

}
