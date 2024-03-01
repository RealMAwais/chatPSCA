import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public subject = new Subject<any>();
  isLoggedIn = false;
  userLoggedIn: boolean;


  constructor(
    private afAuth: AngularFireAuth,
    public NgxUiLoaderService: NgxUiLoaderService
  ) {

    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });

  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Auth Service: loginUser: success');
      })
      .catch(error => {
        console.log('Auth Service: login error...', error);
      });

  }

}