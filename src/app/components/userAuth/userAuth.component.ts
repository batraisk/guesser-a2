import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { Angular2TokenService } from '../../services/token.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './userAuth.component.html',
  styleUrls: ['./userAuth.component.scss']
})
export class userAuthComponent implements OnInit {
  private _type: string = 'enter';
  constructor(private route: ActivatedRoute,
              private _tokenService: Angular2TokenService
              // private _tokenService: Angular2TokenService
              ) {
  }
  ngOnInit() {}


  singIn(email: string, password: string) {
    this._tokenService.signIn({
      email:    email,
      password: password
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  newUser() {
    this._type = 'register';
  }

  enter() {
    this._type = 'enter';
  }

  register(email: string, password: string) {
    this._tokenService.registerAccount({
      email: email,
      password: password,
      passwordConfirmation: password
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  singOut() {
    this._tokenService.signOut().subscribe(
    res =>      console.log(res),
    error =>    console.log(error)
  );
  }

}
