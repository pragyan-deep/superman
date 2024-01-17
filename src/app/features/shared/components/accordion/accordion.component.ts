import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'superman-accordion',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

  @Input() title!: string;
  @Input() description!: string;
}
