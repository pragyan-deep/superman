import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InputDirective } from '../../directives/input/input.directive';
import { IInputType } from '../../../../types/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'superman-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, InputDirective, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({required: true}) type: IInputType = "text";
  @Input() label: string | undefined;
}
