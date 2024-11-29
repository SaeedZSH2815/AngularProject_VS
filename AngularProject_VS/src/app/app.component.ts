import { Component } from '@angular/core';
import { UserLoginUseCase } from '../features/domain/use-cases/user-login-use-case';
import { AuthenticateModel } from '../features/data-infru/models/authenticate-model';
import { UserRepository } from '../features/data-infru/repositories/user-repository';
import * as RxJS from "../core/utility/rxjs-operators";
import { IUserRepository } from '../features/domain/repositories/iuser-repository';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject_VS';

  constructor(public us: IUserRepository, private c: UserLoginUseCase) {
    let au: AuthenticateModel = new AuthenticateModel();
    au.userNameOrEmailAddress = "admin";
    au.password = "123qwe";
    console.log("dd");
    this.c.exceute(au).pipe(RxJS.tap((r) => console.log(r))).subscribe();
    //this.c.exceute(au).pipe().subscribe();

  }


}
