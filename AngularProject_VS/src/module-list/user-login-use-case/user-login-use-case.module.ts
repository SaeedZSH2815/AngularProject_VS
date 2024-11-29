import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserRepository } from '../../features/domain/repositories/iuser-repository';
import { UserRepository } from '../../features/data-infru/repositories/user-repository';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { UserLoginUseCase } from '../../features/domain/use-cases/user-login-use-case';


//export const getUserLoginUseCaseFactory = (userRepository: IUserRepository) => new UserLoginUseCase(userRepository);

//export const getUserLoginUseCaseProvider = {
//  provide: UserLoginUseCase,
//  useFactory: getUserLoginUseCaseFactory,
//}

@NgModule({
  declarations: [],
  providers: [
    //  getUserLoginUseCaseProvider,
   // UserRepository,
    { provide: IUserRepository, useClass: UserRepository },
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
  ],
  imports: [
    CommonModule
  ]
})
export class UserLoginUseCaseModule { }
