import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tasks: Task[] = [];
  paginatedTasks: Task[] = [];
  page = 1;
  pageSize = 10;

  ngOnInit() {
    this.updatePaginatedTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks']) {
      this.updatePaginatedTasks();
    }
  }

  onPageChange() {
    this.updatePaginatedTasks();
  }

  updatePaginatedTasks() {
    const startIndex = (this.page - 1) * this.pageSize;
    this.paginatedTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
  }
}
