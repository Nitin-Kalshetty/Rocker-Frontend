import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './features/user/pages/landing/landing';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ROCKER');

}
