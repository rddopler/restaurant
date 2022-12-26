import { Component } from '@angular/core';
import {NEBULA} from "./constants/app.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = NEBULA;
}
