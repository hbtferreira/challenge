import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeBR from '@angular/common/locales/pt';
import localeBRExtra from '@angular/common/locales/extra/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeBR, 'pt-PT', localeBRExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-PT'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
