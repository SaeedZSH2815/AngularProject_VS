import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataFailed, DataState, DataSuccess } from "../../../core/utility/data-state";
import { AuthenticateEntity } from "../../domain/entities/authenticate-entity";
import { IUserRepository } from "../../domain/repositories/iuser-repository";
import { AuthenticateModel } from "../models/authenticate-model";
import * as RxJS from "../../../core/utility/rxjs-operators";
import { Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserRepository implements IUserRepository {

  constructor(@Inject(HttpClient)  private _http: HttpClient) {

  }
  Authenticate(clAuth: AuthenticateModel): RxJS.Observable<DataState<AuthenticateEntity>> {


    //#region

    let url_ = "http://192.168.20.12:44321/api/TokenAuth/Authenticate";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(clAuth);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "json",
      headers: new HttpHeaders({
        "Content-Type": "application/json-patch+json",
        "Accept": "text/plain"
      })
    };
    //#endregion

    return this._http.request("post", url_, options_).pipe(


      RxJS.mergeMap((response_) => this.ProcessAuthenticate(response_)  ),

      RxJS.catchError((err) => {
        let dataFailed: DataFailed<any> = new DataFailed<any>();
        dataFailed.dataObject = null;
        dataFailed.errorMsg = err;
        return RxJS.of(dataFailed);
      })
    );



  }

  ProcessAuthenticate(clResponse: any): RxJS.Observable<DataState<AuthenticateEntity>> {
    console.log(clResponse["body"]["result"]);
    let dataSuccess: DataSuccess<AuthenticateEntity> = new DataSuccess<AuthenticateEntity>();
    dataSuccess.dataObject = new AuthenticateEntity();
    try {
      
      dataSuccess.dataObject.init(clResponse["body"]["result"]);
      console.log(dataSuccess.dataObject.accessToken);
      dataSuccess.errorMsg = "";
    }
    catch (er) {
      dataSuccess.errorMsg = er;

    }


    return RxJS.of(dataSuccess);
  }


}
