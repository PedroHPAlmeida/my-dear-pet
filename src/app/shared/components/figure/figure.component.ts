import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss'
})
export class FigureComponent {
  @Input() rotate: number = 0;
  @Input() width: number = 134;
  @Input() height: number = 188;
  @Input() text: string = '';
  @Input() arrow: 'up' | 'down' = 'down';
}
