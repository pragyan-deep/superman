import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { IInputType } from '../../../../types/input';

type TForm = {
  name: FormControl<string | null>;
  stages?: FormArray<FormGroup<TStage>>;
};

type TStage = {
  name: FormControl<string | null>;
  inputs?: FormArray<FormGroup<TInput>>;
};

type TInput = {
  name: FormControl<string | null>;
  type: FormControl<IInputType>;
};

@Component({
  selector: 'superman-create-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgFor,
    NgTemplateOutlet,
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  form: FormGroup<TForm> = new FormGroup<TForm>({
    name: new FormControl<string | null>(null, [Validators.required]),
    stages: new FormArray<FormGroup<TStage>>([]),
  });

<<<<<<< HEAD
  //TODO: Make accordion for stages.
=======
  //TODO: Make accordion for stages
>>>>>>> 2f66ee979491ee9c5d0b8d2a45122244662b17f4
  get nameControl() {
    return this.form.controls.name;
  }

  get stageControl() {
    return this.form.controls.stages?.controls;
  }

  initializeNewStage() {
    const stage = new FormGroup<TStage>({
      name: new FormControl<string | null>(null, [Validators.required]),
      inputs: new FormArray<FormGroup<TInput>>([]),
    });
    this.form.controls.stages?.push(stage);
  }

  initializeNewInput(stageFormGroup: FormGroup<TStage>) {
    const input = new FormGroup<TInput>({
      name: new FormControl<string | null>(null, [Validators.required]),
      type: new FormControl<IInputType>('text', [
        Validators.required,
      ]) as FormControl<IInputType>,
    });
    stageFormGroup.controls.inputs?.push(input);
  }
}
