import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { SimpleNgSelectComponent } from './simple-ng-select/simple-ng-select.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgSelectModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SimpleNgSelectComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
