import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from '../../directives/input/input.directive';
import { TInputType } from '../../../../types/input';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { InputType } from '../../../../dummy-data/input';

@Component({
  selector: 'superman-input',
  standalone: true,
  imports: [
    InputDirective,
    ReactiveFormsModule,
    TitleCasePipe
],
  template: `
    <div class="d-flex flex-column m-t-2">
      <span class="font-12">{{ label }}</span>
      @switch (type) {
        @case ('dropdown') {
          <select name="cars" id="cars" [formControl]="control">
            @for (type of inputTypes; track type) {
              <option [value]="type.id" >{{type.name | titlecase }}</option>
            }
          </select>
        }
        @default {
          <input
            name="dynamic-input"
            #input
            supermanInput
            [type]="type"
            [formControl]="control"
            />
          }
        }
      </div>
    `,
})
export class InputComponent {
  @Input({ required: true }) type: TInputType = 'text';
  @Input() label: string | undefined;
  @Input()
  control!: FormControl;

  inputTypes = InputType;
}
