import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { IInputType } from '../../../../types/input';

@Component({
  selector: 'superman-range',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div class="d-flex flex-row">
      <superman-input [type]="type" label="From"></superman-input>
      <superman-input [type]="type" label="To"></superman-input>
    </div>
  `,
})
export class RangeComponent {
  @Input({ required: true }) type: IInputType = 'text';
}
