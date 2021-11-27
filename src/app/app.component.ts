import { Component } from '@angular/core';
import {DataStore} from "./services/datastore.service";
import {WorkTimeModel} from "./models/WorkTime.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ponto-digital';
  public pontos: WorkTimeModel[];
  public showPontos = false;

  constructor(public dataStore: DataStore) {
    this.dataStore.findAll(WorkTimeModel).subscribe(response => {
      this.pontos = response.getModels();
      this.showPontos = true;
    })
  }
}
