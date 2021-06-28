import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from '../layout/user-info/user-info.component';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AllUserComponent } from '../layout/user-info/all-user/all-user.component';
import { LoginUserComponent } from '../layout/user-info/login-user/login-user.component';
import { AlertModule } from '../layout/alert/alert.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AlertModule
  ],
  declarations: [
    UserInfoComponent,
    AllUserComponent,
    LoginUserComponent
  ],
  providers: [UserService],
  bootstrap: [UserInfoComponent],
  exports: [UserInfoComponent]
})
export class UserModule { }
