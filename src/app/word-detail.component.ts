import { Component, Input } from '@angular/core';
import { Word } from './word';
import { WordService } from './word.service';
import { AppComponent } from './app.component';

@Component({
  selector: 'my-word-detail',
  templateUrl: './word-detail.component.html'
})
export class WordDetailComponent {
  @Input()
  word: Word;

  constructor(
    private wordService: WordService,
    private appComponent: AppComponent
  ) {}

  save(): void {
    this.wordService.update(this.word)
      // .then(() => this.appComponent.getWords());
      .then(word => this.word = word);
  }
}
