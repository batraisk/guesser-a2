import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent }   from './components/catalogs/catalogs.component';
import { HelloComponent }   from './components/hello/hello.component';
import { AppComponent }   from './app.component';


const routes: Routes = [
  { path: 'catalogs',  component: CatalogsComponent },
  { path: '',  component: HelloComponent },


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
