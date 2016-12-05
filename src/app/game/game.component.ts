import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})

export class GameComponent implements OnInit {

  list: Word[] = [];
  word: Word;
  answer: Word;

  constructor(
    private wordService: WordService,
  ) {}

  ngOnInit(): void {
    this.wordService.getTask().then(obj => {this.list = obj.list;
                                           this.word = obj.word;});
    // this.wordService.getTask().then(obj => console.log(obj) );
  }

  setAnswer(answer: Word): void {
    this.updateTask();
    if (answer.id === this.word.id) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  updateTask(): void {
    this.wordService.getTask().then(obj => {this.list = obj.list;
                                           this.word = obj.word;});
  }
}
