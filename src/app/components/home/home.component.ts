import {Component, OnInit} from '@angular/core';
import {ADDRESSES, NEBULA} from "../../constants/app.constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showBrooklynAddress: boolean | undefined;
  public showManhattanAddress: boolean | undefined;
  public manhattanAddress: string | undefined;
  public brooklynAddress: string | undefined;
  public restaurantName: string | undefined;

  ngOnInit(): void {
  this.loadContent();
  }

  loadContent() {
    this.manhattanAddress = ADDRESSES.manhattanAddress;
    this.brooklynAddress = ADDRESSES.brooklynAddress;
    this.restaurantName = NEBULA;
  }

  changeToBrooklynAddress() {
    this.showBrooklynAddress = true;
  }

  changeToManhattanAddress() {
    this.showManhattanAddress = true;
  }
}
