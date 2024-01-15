import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { IInputType } from '../../../../types/input';

@Component({
  selector: 'superman-range',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss'
})
export class RangeComponent {
  @Input({required: true}) type: IInputType = "text";
}
