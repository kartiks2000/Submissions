import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import {Task} from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';

import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, TableComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  task_data: Task[] = [];
  filteredTasks: Task[] = []
  search_string!: string;

  filterTask = new FormControl('');
  filterStatus = new FormControl('');
  filterDate = new FormControl('');
  filterForm = new FormControl('');

  ngOnInit(): void {
    this.task_data = [
      { id: '1', task: 'Task 1 - Review Documents', status: 0, from: '2024-11-08', to: '2024-11-25', customerAddress: '505 Maple St', dueDate: new Date('2024-11-15') },
      { id: '2', task: 'Task 2 - Send Email', status: 0, from: '2024-11-24', to: '2024-11-24', customerAddress: '909 Cherry St', dueDate: new Date('2024-11-14') },
      { id: '3', task: 'Task 3 - Review Documents', status: 1, from: '2024-11-19', to: '2024-11-02', customerAddress: '707 Birch St', dueDate: new Date('2024-11-25') },
      { id: '4', task: 'Task 4 - Review Documents', status: 0, from: '2024-11-25', to: '2024-11-17', customerAddress: '909 Cherry St', dueDate: new Date('2024-11-27') },
      { id: '5', task: 'Task 5 - Update Project', status: 1, from: '2024-11-05', to: '2024-11-18', customerAddress: '101 Main St', dueDate: new Date('2024-11-27') },
      { id: '6', task: 'Task 6 - Update Project', status: 2, from: '2024-11-06', to: '2024-11-22', customerAddress: '101 Main St', dueDate: new Date('2024-11-08') },
      { id: '7', task: 'Task 7 - Update Project', status: 2, from: '2024-11-18', to: '2024-11-13', customerAddress: '1001 Ash St', dueDate: new Date('2024-12-02') },
      { id: '8', task: 'Task 8 - Attend Meeting', status: 1, from: '2024-11-06', to: '2024-11-25', customerAddress: '303 Oak St', dueDate: new Date('2024-11-07') },
      { id: '9', task: 'Task 9 - Attend Meeting', status: 1, from: '2024-11-13', to: '2024-11-23', customerAddress: '707 Birch St', dueDate: new Date('2024-11-03') },
      { id: '10', task: 'Task 10 - Send Email', status: 0, from: '2024-11-05', to: '2024-11-26', customerAddress: '202 Elm St', dueDate: new Date('2024-11-12') },
      { id: '11', task: 'Task 11 - Send Email', status: 0, from: '2024-11-26', to: '2024-11-06', customerAddress: '707 Birch St', dueDate: new Date('2024-11-17') },
      { id: '12', task: 'Task 12 - Attend Meeting', status: 2, from: '2024-11-19', to: '2024-11-18', customerAddress: '404 Pine St', dueDate: new Date('2024-11-06') },
      { id: '13', task: 'Task 13 - Complete Report', status: 0, from: '2024-11-23', to: '2024-11-28', customerAddress: '808 Walnut St', dueDate: new Date('2024-11-28') },
      { id: '14', task: 'Task 14 - Update Project', status: 0, from: '2024-11-16', to: '2024-11-20', customerAddress: '505 Maple St', dueDate: new Date('2024-11-11') },
      { id: '15', task: 'Task 15 - Complete Report', status: 1, from: '2024-11-06', to: '2024-11-16', customerAddress: '101 Main St', dueDate: new Date('2024-11-08') },
      { id: '16', task: 'Task 16 - Send Email', status: 0, from: '2024-11-02', to: '2024-11-14', customerAddress: '202 Elm St', dueDate: new Date('2024-11-24') },
      { id: '17', task: 'Task 17 - Attend Meeting', status: 0, from: '2024-11-24', to: '2024-11-25', customerAddress: '202 Elm St', dueDate: new Date('2024-11-03') },
      { id: '18', task: 'Task 18 - Review Documents', status: 1, from: '2024-11-17', to: '2024-11-12', customerAddress: '101 Main St', dueDate: new Date('2024-11-09') },
      { id: '19', task: 'Task 19 - Complete Report', status: 1, from: '2024-11-04', to: '2024-11-09', customerAddress: '1001 Ash St', dueDate: new Date('2024-11-25') },
      { id: '20', task: 'Task 20 - Send Email', status: 0, from: '2024-11-29', to: '2024-11-02', customerAddress: '303 Oak St', dueDate: new Date('2024-11-15') },
    ]

    // Initialize filteredTasks with all tasks initially
    this.filteredTasks = this.task_data;

    // Listen for changes on each filter and apply filter function
    this.filterTask.valueChanges.subscribe(() => this.applyFilters());
    this.filterStatus.valueChanges.subscribe(() => this.applyFilters());
    this.filterDate.valueChanges.subscribe(() => this.applyFilters());
  }

  log(): void {
    console.log(this.filterTask)
    console.log(this.filterStatus)
    console.log(this.filterDate)
  }

  applyFilters() {
    const filterDateValue = this.filterDate.value ? new Date(this.filterDate.value) : null;

    this.filteredTasks = this.task_data.filter(task => {
      // Extract the date from the task's dueDate timestamp and normalize it to midnight
      const taskDueDate = new Date(task.dueDate);
      taskDueDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison (Did to resolve the issue of time zone mis match cuz of JS Date)

      const matchesTask = !this.filterTask.value || task.task.toLowerCase().includes(this.filterTask.value.toLowerCase());
      const matchesStatus = !this.filterStatus.value || task.status === +this.filterStatus.value;
      const matchesDate = !filterDateValue || taskDueDate.toISOString().split('T')[0] === filterDateValue.toISOString().split('T')[0];

      return matchesTask && matchesStatus && matchesDate;
    });
  }

}
