import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from '../../directives/input/input.directive';
import { TInputType } from '../../../../types/input';
import {
  CommonModule,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  TitleCasePipe,
} from '@angular/common';
import { InputType } from '../../../../dummy-data/input';

@Component({
  selector: 'superman-input',
  standalone: true,
  imports: [
    InputDirective,
    ReactiveFormsModule,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    TitleCasePipe
  ],
  template: `
    <div class="d-flex flex-column m-t-2">
      <span class="font-12">{{ label }}</span>
      <ng-container [ngSwitch]="type">
        <ng-container *ngSwitchCase="'dropdown'">
          <select name="cars" id="cars" [formControl]="control">
            <option *ngFor="let type of inputTypes" [value]="type.id" >{{type.name | titlecase }}</option>
          </select>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <input
            name="dynamic-input"
            #input
            supermanInput
            [type]="type"
            [formControl]="control"
          />
        </ng-container>
      </ng-container>
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
