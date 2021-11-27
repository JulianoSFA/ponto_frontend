import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Observable, ReplaySubject } from 'rxjs';
import { ErrorResponse } from 'angular2-jsonapi';
import {UserModel} from "../models/User.model";
import {DataStore} from "./datastore.service";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  public userChanges: Observable<UserModel>;
  private _user: UserModel;
  public userReplaySubject: ReplaySubject<UserModel>;

  constructor(protected datastore: DataStore,
              protected nbAuth: NbAuthService) {
    this.userReplaySubject = new ReplaySubject<UserModel>(1);
    this.userChanges = this.userReplaySubject.asObservable();
    this.listenTokenChange();
  }

  private listenTokenChange() {
    this.nbAuth.onTokenChange()
      .subscribe((token) => {
        if (token.isValid()) {
          const payload = token.getPayload();
          this.loadUser(payload.user_id);
        } else {
          // Trigerring the error stops the subscription propagation
          this.userReplaySubject.next();
        }
    });
  }

  public setUser(user: UserModel) {
    this._user = user;
    this.userReplaySubject.next(this._user);
  }

  public loadUser(user_id: string): void {
    this.datastore.findRecord(UserModel, user_id).subscribe(
      (user: UserModel) => {
        this.setUser(user);
      },
      (error: ErrorResponse) => {
        // Trigerring the error stops the subscription propagation
        return
      }
    );
  }


}
