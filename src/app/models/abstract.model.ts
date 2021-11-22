import {JsonApiModel} from "angular2-jsonapi";


export class AbstractModel extends JsonApiModel {

  get pk() {
    return this.id;
  }

  set pk(value) { }

  public toString = (): string => {
    return `(ID: ${this.id}) ${this.type}`;
  }

}
