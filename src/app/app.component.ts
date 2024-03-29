import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FormComponent } from './features/form/form.component';
import { AuthComponent } from './features/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superman';
}
