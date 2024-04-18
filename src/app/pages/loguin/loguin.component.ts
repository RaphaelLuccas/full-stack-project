import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../componets/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent
  ],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.scss'
})
export class LoguinComponent {

}
