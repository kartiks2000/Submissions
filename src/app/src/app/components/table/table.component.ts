import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() tasks: Task[] = [];
}
