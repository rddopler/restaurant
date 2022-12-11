import { Component, OnInit } from '@angular/core';
import {SEPARATOR} from "../../../constants/app.constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public linkSeparator: string | undefined;

  ngOnInit(): void {
    this.loadContent();
  }

  public loadContent() {
    this.linkSeparator = SEPARATOR;
  }
}
