import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeftPageComponent } from './components/left-page/left-page.component';
import { FigureComponent } from './components/figure/figure.component';
import { FillableStickerComponent } from './components/fillable-sticker/fillable-sticker.component';

@NgModule({
  declarations: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
  ],
})
export class SharedModule { }
