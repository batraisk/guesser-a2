import { Component } from '@angular/core';
import { Router }            from '@angular/router';

import { Word } from './word';
import { WordService } from './word.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WordService]
})
export class AppComponent {
  title = 'Guesser';
  list: Word[] = [];
  selectedWord: Word;

  constructor(private wordService: WordService,
              private router: Router) { }

  gotoStart(): void {
    this.router.navigate(['/game']);
  }

  gotoBase(): void {
    this.router.navigate(['/base']);
  }
}
