import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fillable-sticker',
  templateUrl: './fillable-sticker.component.html',
  styleUrl: './fillable-sticker.component.scss'
})
export class FillableStickerComponent {
  @Input({ required: true }) image: string = '';
  @Input() filled: boolean = false;
}
