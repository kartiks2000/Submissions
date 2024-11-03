import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { Task } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';

import { TableComponent } from '../table/table.component';
import { MapScreenComponent } from '../map-screen/map-screen.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    ReactiveFormsModule,
    MapScreenComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  task_data: Task[] = [];
  filteredTasks: Task[] = [];
  search_string!: string;

  table_map_toogle = false; // false displays the table, true displays the map screen

  filterTask = new FormControl('');
  filterStatus = new FormControl('');
  filterDate = new FormControl('');
  filterForm = new FormControl('');

  ngOnInit(): void {
    this.task_data = [
      {
          id: '1',
          task: 'Work Flow 1: Requires Location',
          status: 0,
          from: 'alice@example.com',
          to: 'bob@example.com',
          customerAddress: '505 Maple St',
          dueDate: new Date('2024-11-15'),
      },
      {
          id: '2',
          task: 'Work Flow 2: Requires Location',
          status: 0,
          from: 'carol@example.com',
          to: 'dave@example.com',
          customerAddress: '909 Cherry St',
          dueDate: new Date('2024-11-14'),
      },
      {
          id: '3',
          task: 'Work Flow 3: Requires Location',
          status: 1,
          from: 'eve@example.com',
          to: 'frank@example.com',
          customerAddress: '707 Birch St',
          dueDate: new Date('2024-11-25'),
      },
      {
          id: '4',
          task: 'Work Flow 4: Requires Location',
          status: 0,
          from: 'grace@example.com',
          to: 'hank@example.com',
          customerAddress: '909 Cherry St',
          dueDate: new Date('2024-11-27'),
      },
      {
          id: '5',
          task: 'Work Flow 5: Requires Location',
          status: 1,
          from: 'irene@example.com',
          to: 'jack@example.com',
          customerAddress: '101 Main St',
          dueDate: new Date('2024-11-27'),
      },
      {
          id: '6',
          task: 'Work Flow 6: Requires Location',
          status: 2,
          from: 'kate@example.com',
          to: 'leo@example.com',
          customerAddress: '101 Main St',
          dueDate: new Date('2024-11-08'),
      },
      {
          id: '7',
          task: 'Work Flow 7: Requires Location',
          status: 2,
          from: 'mike@example.com',
          to: 'nina@example.com',
          customerAddress: '1001 Ash St',
          dueDate: new Date('2024-12-02'),
      },
      {
          id: '8',
          task: 'Work Flow 8: Requires Location',
          status: 1,
          from: 'oliver@example.com',
          to: 'peter@example.com',
          customerAddress: '303 Oak St',
          dueDate: new Date('2024-11-07'),
      },
      {
          id: '9',
          task: 'Work Flow 9: Requires Location',
          status: 1,
          from: 'quincy@example.com',
          to: 'rachel@example.com',
          customerAddress: '707 Birch St',
          dueDate: new Date('2024-11-03'),
      },
      {
          id: '10',
          task: 'Work Flow 10: Requires Location',
          status: 0,
          from: 'sarah@example.com',
          to: 'tom@example.com',
          customerAddress: '202 Elm St',
          dueDate: new Date('2024-11-12'),
      },
      {
          id: '11',
          task: 'Work Flow 11: Requires Location',
          status: 0,
          from: 'ursula@example.com',
          to: 'victor@example.com',
          customerAddress: '707 Birch St',
          dueDate: new Date('2024-11-17'),
      },
      {
          id: '12',
          task: 'Work Flow 12: Requires Location',
          status: 2,
          from: 'wendy@example.com',
          to: 'xander@example.com',
          customerAddress: '404 Pine St',
          dueDate: new Date('2024-11-06'),
      },
      {
          id: '13',
          task: 'Work Flow 13: Requires Location',
          status: 0,
          from: 'yara@example.com',
          to: 'zane@example.com',
          customerAddress: '808 Walnut St',
          dueDate: new Date('2024-11-28'),
      },
      {
          id: '14',
          task: 'Work Flow 14: Requires Location',
          status: 0,
          from: 'amy@example.com',
          to: 'brian@example.com',
          customerAddress: '505 Maple St',
          dueDate: new Date('2024-11-11'),
      },
      {
          id: '15',
          task: 'Work Flow 15: Requires Location',
          status: 1,
          from: 'chris@example.com',
          to: 'diana@example.com',
          customerAddress: '101 Main St',
          dueDate: new Date('2024-11-08'),
      },
      {
          id: '16',
          task: 'Work Flow 16: Requires Location',
          status: 0,
          from: 'ethan@example.com',
          to: 'fiona@example.com',
          customerAddress: '202 Elm St',
          dueDate: new Date('2024-11-24'),
      },
      {
          id: '17',
          task: 'Work Flow 17: Requires Location',
          status: 0,
          from: 'george@example.com',
          to: 'harry@example.com',
          customerAddress: '202 Elm St',
          dueDate: new Date('2024-11-03'),
      },
      {
          id: '18',
          task: 'Work Flow 18: Requires Location',
          status: 1,
          from: 'isabel@example.com',
          to: 'jake@example.com',
          customerAddress: '101 Main St',
          dueDate: new Date('2024-11-09'),
      },
      {
          id: '19',
          task: 'Work Flow 19: Requires Location',
          status: 1,
          from: 'karen@example.com',
          to: 'liam@example.com',
          customerAddress: '1001 Ash St',
          dueDate: new Date('2024-11-25'),
      },
      {
          id: '20',
          task: 'Work Flow 20: Requires Location',
          status: 0,
          from: 'mia@example.com',
          to: 'noah@example.com',
          customerAddress: '303 Oak St',
          dueDate: new Date('2024-11-15'),
      },
  ];

    // Initialize filteredTasks with all tasks initially
    this.filteredTasks = this.task_data;

    // Listen for changes on each filter and apply filter function
    this.filterTask.valueChanges.subscribe(() => this.applyFilters());
    this.filterStatus.valueChanges.subscribe(() => this.applyFilters());
    this.filterDate.valueChanges.subscribe(() => this.applyFilters());
  }

  log(): void {
    console.log(this.filterTask);
    console.log(this.filterStatus);
    console.log(this.filterDate);
  }

  applyFilters() {
    const filterDateValue = this.filterDate.value
      ? new Date(this.filterDate.value)
      : null;

    this.filteredTasks = this.task_data.filter((task) => {
      // Extract the date from the task's dueDate timestamp and normalize it to midnight
      const taskDueDate = new Date(task.dueDate);
      taskDueDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison (Did to resolve the issue of time zone mis match cuz of JS Date)

      const matchesTask =
        !this.filterTask.value ||
        task.task.toLowerCase().includes(this.filterTask.value.toLowerCase());
      const matchesStatus =
        !this.filterStatus.value || task.status === +this.filterStatus.value;
      const matchesDate =
        !filterDateValue ||
        taskDueDate.toISOString().split('T')[0] ===
          filterDateValue.toISOString().split('T')[0];

      return matchesTask && matchesStatus && matchesDate;
    });
  }

  downloadCSV() {
    const csvRows = [];
    const headers = [
      'ID',
      'Task',
      'Status',
      'From',
      'To',
      'Customer Address',
      'Due Date',
    ];
    csvRows.push(headers.join(','));

    this.filteredTasks.forEach((task) => {
      const row = [
        task.id,
        task.task,
        task.status,
        task.from,
        task.to,
        task.customerAddress,
        task.dueDate.toISOString().split('T')[0],
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'filtered_tasks.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  showTable() {
    this.table_map_toogle = false;
  }

  showMap() {
    this.table_map_toogle = true;
  }
}
