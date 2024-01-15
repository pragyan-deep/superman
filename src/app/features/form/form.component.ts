import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { NgFor, TitleCasePipe } from '@angular/common';
import { inputs } from '../../../utils/inputs';

@Component({
  selector: 'superman-form',
  standalone: true,
  imports: [InputComponent, TitleCasePipe, NgFor],
  template: `<ng-container *ngFor="let input of inputTypes">
    <superman-input
      [type]="input.type"
      [label]="input.type | titlecase"
    ></superman-input>
  </ng-container>`,
})
export class FormComponent {
  inputTypes = inputs;
}
