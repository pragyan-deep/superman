import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { CommonModule, NgFor } from '@angular/common';
import { CreateFormComponent } from './components/create-form/create-form.component';

@Component({
  selector: 'superman-form',
  standalone: true,
  imports: [InputComponent, NgFor, CreateFormComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
}
