import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';

@Component({
  selector: 'superman-form',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
