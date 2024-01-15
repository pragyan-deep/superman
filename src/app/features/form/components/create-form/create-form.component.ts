import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'superman-create-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {

}
