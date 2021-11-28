import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  // public userChanges: Observable<UserModel>;
  // private _user: UserModel;
  // public userReplaySubject: ReplaySubject<UserModel>;
  private userData: Observable<firebase.User | null>;

  constructor(//protected datastore: DataStore,
              // protected nbAuth: NbAuthService,
              private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    // this.userReplaySubject = new ReplaySubject<UserModel>(1);
    // this.userChanges = this.userReplaySubject.asObservable();
    // this.listenTokenChange();
  }

  // private listenTokenChange() {
  //   this.nbAuth.onTokenChange()
  //     .subscribe((token) => {
  //       if (token.isValid()) {
  //         const payload = token.getPayload();
  //         this.loadUser(payload.user_id);
  //       } else {
  //         // Trigerring the error stops the subscription propagation
  //         this.userReplaySubject.next();
  //       }
  //   });
  // }

  // public setUser(user: UserModel) {
  //   this._user = user;
  //   this.userReplaySubject.next(this._user);
  // }

  // public loadUser(user_id: string): void {
  //   this.datastore.findRecord(UserModel, user_id).subscribe(
  //     (user: UserModel) => {
  //       this.setUser(user);
  //     },
  //     (error: ErrorResponse) => {
  //       // Trigerring the error stops the subscription propagation
  //       return
  //     }
  //   );
  // }

  /* Sign up */
  public signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('You are Successfully signed up!', res);
    })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  public signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('Youre in!');
    })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  /* Sign out */
  public signOut() {
    this.angularFireAuth.signOut();
  }

}
