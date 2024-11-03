import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import {Task} from '../../interfaces/task.interface';

import {MapListComponent} from '../../components/map-list/map-list.component';

@Component({
  selector: 'app-map-screen',
  standalone: true,
  imports: [CommonModule, MapListComponent],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent {

  @Input() tasks: Task[] = [];

}
