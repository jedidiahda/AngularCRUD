import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;   
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  //type is EventEmitter because a child component uses an event to pass data to a parent component
  private _employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.notify.emit(this.employee);
  }



}
