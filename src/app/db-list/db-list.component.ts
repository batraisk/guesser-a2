import { Component } from '@angular/core';
import { Word } from '../word';
import { Router }            from '@angular/router';
import { WordService } from '../word.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'db-list',
  templateUrl: './db-list.component.html'
})

export class DBListComponent {


  title = 'Guesser';
  list: Word[] = [];
  selectedWord: Word;

  constructor(private wordService: WordService,
              private router: Router) { }

  getWords(): void {
    this.wordService.getWords().then(list => this.list = list);
    console.log(this.list);
  }

  add(ru: string, en: string): void {
    console.log('vfv');
    ru = ru.trim();
    en = en.trim();
    if (!ru || !en) { return; }
    this.wordService.create(ru, en)
      .then(word => {
        this.list.push(word);
        this.selectedWord = null;
      });
  }

  delete(word: Word): void {
    this.wordService
        .delete(word.id)
        .then(() => {
          this.list = this.list.filter(h => h !== word);
          if (this.selectedWord === word) { this.selectedWord = null; }
        });
  }

  ngOnInit(): void {
    this.getWords();
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

  gotoStart(): void {
    this.router.navigate(['/game']);
  }

  gotoBase(): void {
    this.router.navigate(['/base']);
  }
}
