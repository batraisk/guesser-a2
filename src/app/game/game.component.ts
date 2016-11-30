import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})

export class GameComponent {

  constructor(
    private wordService: WordService,
  ) {}
}
