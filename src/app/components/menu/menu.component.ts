import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isChefsTasting = false;
  isDinner = false;
  isDessert = false;
  isWine = false;

  public menuTitle: any;
  constructor() { }

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.menuTitle = 'CHEF\'S TASTING';
  }

  onChefsTasting() {
    this.isChefsTasting = true;
    this.isDinner = false;
    this.isWine = false;
    this.isDessert = false;
    this.menuTitle = 'CHEF\'S TASTING';
  }

  onDinner() {
    this.isDinner = true;
    this.isChefsTasting = false;
    this.isWine = false;
    this.isDessert = false;
    this.menuTitle = 'DINNER';
  }

  onDessert() {
    this.isDessert = true;
    this.isChefsTasting = false;
    this.isWine = false;
    this.isDinner = false;
    this.menuTitle = 'DESSERT';
  }

  onWine() {
    this.isWine = true;
    this.isChefsTasting = false;
    this.isDinner = false;
    this.isDessert = false;
    this.menuTitle = 'WINE';
  }
}
