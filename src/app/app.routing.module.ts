import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleNgSelectComponent } from './simple-ng-select/simple-ng-select.component';

const routes: Routes = [

  {
    path: 'simple-ng-select',
    component: SimpleNgSelectComponent,
  },
    {
    path: '',
    redirectTo: 'simple-ng-select',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
