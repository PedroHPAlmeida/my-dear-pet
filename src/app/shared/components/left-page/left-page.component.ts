import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrl: './left-page.component.scss'
})
export class LeftPageComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) bgImage: string = '';
}
