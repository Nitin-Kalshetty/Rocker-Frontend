import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import { Register} from '../register/register';
import { Login } from '../login/login';


@Component({
  selector: 'app-landing',
  imports: [Register,Login],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  constructor(private cdRef: ChangeDetectorRef) {
  }

  mode: 'login' | 'signup' = 'signup';
  successMessage : string = '';

  onRegisterSuccess(message : string){
    this.mode = 'login';
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
      this.cdRef.detectChanges();
    }, 5000);

  }

}
