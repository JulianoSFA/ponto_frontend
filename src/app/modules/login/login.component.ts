import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {NbAuthResult, NbAuthService, NbTokenService} from '@nebular/auth';
import {UserSignIn} from "../../components/user-sign-in.interface";
import {tap} from "rxjs/operators";
import {AuthUserService} from "../../services/auth-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loginError = false;
  public signInFormLoading = false;
  private strategy: string;
  public user: UserSignIn = {
    username: '',
    password: '',
    rememberMe: true
  };
  private submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              protected nbAuth: NbAuthService,
              protected nbTokenService: NbTokenService,
              protected authUser: AuthUserService) {
    this.strategy = 'NbPasswordAuthStrategy';
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  atualizaRelogio() {
    // var momentoAtual = new Date();
    //
    // var vhora = momentoAtual.getHours();
    // var vminuto = momentoAtual.getMinutes();
    // var vsegundo = momentoAtual.getSeconds();
    //
    // var vdia = momentoAtual.getDate();
    // var vmes = momentoAtual.getMonth() + 1;
    // var vano = momentoAtual.getFullYear();
    //
    // if (vdia < 10) {
    //   vdia = "0" + vdia;
    // }
    // if (vmes < 10) {
    //   vmes = "0" + vmes;
    // }
    // if (vhora < 10) {
    //   vhora = "0" + vhora;
    // }
    // if (vminuto < 10) {
    //   vminuto = "0" + vminuto;
    // }
    // if (vsegundo < 10) {
    //   vsegundo = "0" + vsegundo;
    // }
    //
    // dataFormat = vdia + " / " + vmes + " / " + vano;
    // horaFormat = vhora + " : " + vminuto + " : " + vsegundo;
    //
    // document.getElementById("data").innerHTML = dataFormat;
    // document.getElementById("hora").innerHTML = horaFormat;
    //
    // setTimeout("atualizaRelogio()", 1000);
  }


  OnSubmit() {
    if (!this.form.valid){
      this.loginError = true;
      return
    }
    this.signInFormLoading = true;
    this.signIn().subscribe((result: NbAuthResult) => {
      this.signInFormLoading = false;
      // Ir para a outra pagina
    },
      (error => {
        console.log('Erro: ', error)
        this.loginError = true;
    }))
  }

  signIn(): Observable<NbAuthResult> {
    this.submitted = true;

    return this.nbAuth.authenticate(this.strategy, this.user)
      .pipe(
        tap(
          (result: NbAuthResult) => {
            this.onAuthenticateResult(result);
          }));
  }

  private onAuthenticateResult(result: NbAuthResult) {
    this.submitted = false;
    if (result.isSuccess()) {
      const token = result.getToken();
      this.nbTokenService.set(token);
      const payload = token.getPayload();
      if (payload.user_id) {
        this.authUser.loadUser(payload.user_id);
      }
    }
  }
}
