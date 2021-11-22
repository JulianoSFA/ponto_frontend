import { Injectable } from '@angular/core';
import {DatastoreConfig, JsonApiDatastore, JsonApiDatastoreConfig} from "angular2-jsonapi";
import {HttpClient} from "@angular/common/http";

const config: DatastoreConfig = {
  baseUrl: '/api',
  models: {
    // posts: Post,
  }
}

@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: HttpClient) {
    super(http);
  }

}
