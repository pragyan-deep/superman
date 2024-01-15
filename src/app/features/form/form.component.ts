import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { RangeComponent } from '../shared/components/range/range.component';
import { IInputType } from '../../types/input';
import { CommonModule } from '@angular/common';
import { inputs } from '../../../utils/inputs';

@Component({
  selector: 'superman-form',
  standalone: true,
  imports: [InputComponent, RangeComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  inputTypes = inputs
}
