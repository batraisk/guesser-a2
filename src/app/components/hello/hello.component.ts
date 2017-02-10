import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { Angular2TokenService } from '../../services/token.service';
// import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private catalogService: CatalogsService,
              private _tokenService: Angular2TokenService) {
  }
  userSignedIn() {
    console.log(this._tokenService.userSignedIn())
  }

  register() {
    this._tokenService.registerAccount({
      email:                'example8@example.org',
      password:             'secretPassword',
      passwordConfirmation: 'secretPassword'
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  singin() {
    this._tokenService.signIn({
      email:    'example@example.org',
      password: 'secretPassword'
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  validate() {
    this._tokenService.validateToken().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }


  ngOnInit() {

  }

}
