import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  _rotate: number = 0;

  @Input()
  set rotate(value: number) {
    this._rotate = value;
    this.updateTransform();
  }

  transition: string = 'transform 0.3s ease-in-out';
  transform: string = '';
  transformHover: string = `rotate(0deg) scale(1.25)`;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', this.transition);
    this.updateTransform();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.transformHover);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.transform);
  }

  private updateTransform() {
    this.transform = `rotate(${this._rotate}deg) scale(1)`;
    this.renderer.setStyle(this.el.nativeElement, 'transform', this.transform);
  }
}
