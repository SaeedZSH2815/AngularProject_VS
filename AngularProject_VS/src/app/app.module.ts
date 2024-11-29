import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { UserLoginUseCaseModule } from '../module-list/user-login-use-case/user-login-use-case.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginUseCaseModule,
  ],
  providers: [
    provideHttpClient(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
