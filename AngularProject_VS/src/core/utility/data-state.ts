export class DataState<T>{
  public dataObject?: T;
  public errorMsg?: any;
}

export class DataSuccess<T> extends DataState<T> {
  constructor() {
    super();
    this.errorMsg = "";
  }

}

export class DataFailed<T> extends DataState<T> { }

