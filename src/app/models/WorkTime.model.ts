import {Attribute, JsonApiModelConfig} from "angular2-jsonapi";
import {AbstractModel} from "./abstract.model";
import {UserModel} from "./User.model";


@JsonApiModelConfig({
  type: 'WorkTime',
  modelEndpointUrl: 'ponto/work-time'
})
export class WorkTimeModel extends AbstractModel {
  @Attribute()
  id: string;

  @Attribute()
  created: Date;

  @Attribute()
  updated: Date;

  @Attribute()
  day: Date;

  @Attribute()
  next_time_block: WorkTimeModel;

  @Attribute()
  user: UserModel;

  @Attribute()
  start: Date;

  @Attribute()
  end: Date;
}
