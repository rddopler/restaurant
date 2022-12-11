import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  showBrooklynAddress = false;
  showManhattanAddress = false;

  constructor() { }



  changeToBrooklynAddress() {
    this.showBrooklynAddress = true;
  }

  changeToManhattanAddress() {
    this.showManhattanAddress = true;
  }
}
