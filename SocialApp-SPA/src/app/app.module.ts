import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      MenubarModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
