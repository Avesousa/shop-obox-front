import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { AuthenticationRouterModule } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthenticationRouterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule {}