import { DataState } from "../../../core/utility/data-state";
import { AuthenticateModel } from "../../data-infru/models/authenticate-model";
import * as RxJS from "../../../core/utility/rxjs-operators";
import { AuthenticateEntity } from "../entities/authenticate-entity";
export abstract class IUserRepository {
  abstract Authenticate(clAuth: AuthenticateModel): RxJS.Observable<DataState<AuthenticateEntity>>;
}
