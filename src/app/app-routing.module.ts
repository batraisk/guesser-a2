import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent }   from './components/catalogs/catalogs.component';
import { HelloComponent }   from './components/hello/hello.component';
import { GameComponent }   from './components/game/game.component';
import { userAuthComponent }   from './components/userAuth/userAuth.component';
import { AppComponent }   from './app.component';
import { Angular2TokenService } from './services/token.service';


const routes: Routes = [
  { path: 'catalogs',
    component: CatalogsComponent,
    canActivate: [Angular2TokenService] },

  { path: '',
    component: HelloComponent,
    canActivate: [Angular2TokenService] },

  { path: 'game',
    component: GameComponent,
    canActivate: [Angular2TokenService] },

  { path: 'userAuth',
    component: userAuthComponent },

  {
    path: 'restricted',
    component: userAuthComponent,
    canActivate: [Angular2TokenService]
  }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
