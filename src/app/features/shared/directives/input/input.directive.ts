import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[supermanInput]',
  standalone: true
})
export class InputDirective {

  private renderer = inject(Renderer2);
  private elRef = inject(ElementRef)

  @Input({required: true}) set type (type: string) {
    if(!type) return;
    this.renderer.setAttribute(this.elRef.nativeElement, "type", type)
  };

  @Input() set formControlName (formControlName: string | undefined) {
    if(!formControlName) return;
    this.renderer.setAttribute(this.elRef.nativeElement, "formControlName", formControlName)
  };

}
