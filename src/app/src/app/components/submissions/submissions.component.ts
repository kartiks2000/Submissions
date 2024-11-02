import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SearchComponent} from '../search/search.component';

import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent{

  task_date: Task[] = [];

}
