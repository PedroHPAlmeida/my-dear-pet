import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss'
})
export class FigureComponent {
  selectedFile: File | null = null;

  @Input() rotate: number = 0;
  @Input() width: number = 134;
  @Input() height: number = 188;
  @Input() text: string = '';
  @Input() arrow: 'up' | 'down' = 'down';

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  onFileSelected(event: Event, figureEl: HTMLElement): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      figureEl.style.backgroundImage = `url(${URL.createObjectURL(this.selectedFile)})`;
    }
  }
}
