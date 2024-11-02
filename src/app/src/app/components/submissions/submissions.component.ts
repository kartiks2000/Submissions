import { Component } from '@angular/core';

import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent {

}
