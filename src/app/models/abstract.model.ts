import {JsonApiModel} from "angular2-jsonapi";
import {DataStore} from "../services/datastore.service";


export class AbstractModel extends JsonApiModel {
  public service: DataStore;

  constructor(_datastore: any, data?: any) {
    super(_datastore, data);
    this.service = _datastore;
  }

  get pk() {
    return this.id;
  }

  set pk(value) { }

  public toString = (): string => {
    return `(ID: ${this.id}) ${this.type}`;
  }

}
