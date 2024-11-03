import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NavbarComponent} from './components/navbar/navbar.component';
import {SubmissionsComponent} from './components/submissions/submissions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SubmissionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Submissions';
}
