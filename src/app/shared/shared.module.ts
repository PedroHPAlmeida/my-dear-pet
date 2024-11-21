import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeftPageComponent } from './components/left-page/left-page.component';
import { FigureComponent } from './components/figure/figure.component';
import { FillableStickerComponent } from './components/fillable-sticker/fillable-sticker.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
    HighlightDirective,
  ],
})
export class SharedModule { }
