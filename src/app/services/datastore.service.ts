import { Injectable } from '@angular/core';
import {DatastoreConfig, JsonApiDatastore, JsonApiDatastoreConfig} from "angular2-jsonapi";
import {HttpClient} from "@angular/common/http";
import {WorkTimeModel} from "../models/WorkTime.model";
import {UserModel} from "../models/User.model";

const config: DatastoreConfig = {
  baseUrl: '/api',
  models: {
    User: UserModel,
    WorkTime: WorkTimeModel,
  }
}

@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class DataStore extends JsonApiDatastore {

  constructor(protected http: HttpClient,) {
    super(http);
  }

}
