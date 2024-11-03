import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-map-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-list.component.html',
  styleUrl: './map-list.component.css'
})
export class MapListComponent {

  @Input() tasks: Task[] = [];

}
