import { Component, Input } from '@angular/core';

@Component({
  selector: 'superman-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() name: string = "Submit"
  @Input() class: string = ""
}
