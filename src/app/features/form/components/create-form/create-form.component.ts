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
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';

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
  type: FormControl<number | null>;
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
    MatExpansionModule,
    AccordionComponent
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  form: FormGroup<TForm> = new FormGroup<TForm>({
    name: new FormControl<string | null>(null, [Validators.required]),
    stages: new FormArray<FormGroup<TStage>>([]),
  });

  //TODO: Make accordion for stages
  get nameControl() {
    return this.form.controls.name;
  }

  get stageControl() {
    return this.form.controls.stages?.controls;
  }

  initializeNewStage() {
    const length = this.stageControl?.length || 0;
    const stage = new FormGroup<TStage>({
      name: new FormControl<string | null>(`Stage ${length + 1}`, [Validators.required]),
      inputs: new FormArray<FormGroup<TInput>>([]),
    });
    this.form.controls.stages?.push(stage);
  }

  initializeNewInput(stageFormGroup: FormGroup<TStage>) {
    const input = new FormGroup<TInput>({
      name: new FormControl<string | null>(null, [Validators.required]),
      type: new FormControl<number | null>(null, [
        Validators.required,
      ]),
    });
    stageFormGroup.controls.inputs?.push(input);
  }
}
