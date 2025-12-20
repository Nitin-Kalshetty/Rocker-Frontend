import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Register} from '../register/register';
import { Login } from '../login/login';


@Component({
  selector: 'app-landing',
  imports: [RouterOutlet,Register,Login],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  mode: 'login' | 'signup' = 'signup';


}
