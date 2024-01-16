import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  onButtonClick(event: Event){
    this.onClick.emit(event)
  }
}
