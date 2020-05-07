import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleNgSelectComponent } from './simple-ng-select/simple-ng-select.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';

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
  {
    path: 'virtual-scroll',
    component: LazyLoadingComponent,
  },
  {
    path: 'custom-template-options',
    component: CustomTemplateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
