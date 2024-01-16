import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputDirective } from '../../directives/input/input.directive';
import { IInputType } from '../../../../types/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'superman-input',
  standalone: true,
  imports: [
    InputDirective, ReactiveFormsModule
  ],
  template: `
    <div class="d-flex flex-column m-t-2">
      <span class="font-12">{{ label }}</span>
      <input name="dynamic-input" #input supermanInput [type]="type" [formControl]="control"/>
    </div>
  `,  
})
export class InputComponent {
  @Input({ required: true }) type: IInputType = 'text';
  @Input() label: string | undefined;
  @Input()
  control!: FormControl;
}
