import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeftPageComponent } from './components/left-page/left-page.component';
import { FigureComponent } from './components/figure/figure.component';
import { FillableStickerComponent } from './components/fillable-sticker/fillable-sticker.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BookComponent } from './components/flipbook/book/book.component';
import { PageComponent } from './components/flipbook/page/page.component';
import { ReversePipe } from './components/flipbook/pipes/reverse.pipe';

@NgModule({
  declarations: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
    HighlightDirective,
    BookComponent,
    PageComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    LeftPageComponent,
    FigureComponent,
    FillableStickerComponent,
    HighlightDirective,
    BookComponent,
  ],
})
export class SharedModule { }
