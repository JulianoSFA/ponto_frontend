import {Attribute, JsonApiModelConfig} from "angular2-jsonapi";
import {AbstractModel} from "./abstract.model";


@JsonApiModelConfig({
  type: 'User',
  modelEndpointUrl: 'ponto/work-time'
})
export class UserModel extends AbstractModel {
  @Attribute()
  id: string;

  @Attribute()
  last_login: Date;

  @Attribute()
  is_superuser: boolean;

  @Attribute()
  is_staff: boolean;

  @Attribute()
  date_joined: Date;

  @Attribute()
  created: Date;

  @Attribute()
  updated: Date;

  @Attribute()
  first_name: string;

  @Attribute()
  middle_name: string;

  @Attribute()
  last_name: string;

  @Attribute()
  username: string;

  @Attribute()
  email: string;

  @Attribute()
  dob: Date;

}
