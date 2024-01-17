import { Component } from '@angular/core';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { createUser } from '../../../../supabase/auth';

@Component({
  selector: 'superman-auth',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  signupForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required]),
  })

  signUp(){
    if(this.signupForm.valid){
      const email = this.signupForm.value.email
      const password = this.signupForm.value.password
      if(!email || !password) return;
      createUser(email, password);
    }
  }
}
