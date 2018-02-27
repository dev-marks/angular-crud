import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicoService} from './servico.service';
import {FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule,
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
