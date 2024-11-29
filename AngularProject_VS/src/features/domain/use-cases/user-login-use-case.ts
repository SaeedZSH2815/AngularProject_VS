import { DataState } from "../../../core/utility/data-state";
import { UseCase } from "../../../core/utility/use-case";
import { AuthenticateModel } from "../../data-infru/models/authenticate-model";
import { AuthenticateEntity } from "../entities/authenticate-entity";
import * as RxJS from "../../../core/utility/rxjs-operators";
import { IUserRepository } from "../repositories/iuser-repository";
import { Injectable } from "@angular/core";

@Injectable()
export class UserLoginUseCase implements UseCase<AuthenticateModel, DataState<AuthenticateEntity>> {

  constructor(private _IUserRepository: IUserRepository) {

  }

  exceute(clParam: AuthenticateModel): RxJS.Observable<DataState<AuthenticateEntity>> {
    return this._IUserRepository.Authenticate(clParam);
  }

}
