import {Component, OnInit} from '@angular/core';
import {ADDRESSES, CONTACT, LABELS} from "../../../../constants/app.constants";

@Component({
  selector: 'app-manhattan',
  templateUrl: './manhattan.component.html',
  styleUrls: ['./manhattan.component.scss']
})
export class ManhattanComponent implements OnInit{

  public address: string | undefined;
  public contact: string | undefined;
  public borough: string | undefined;
  public locationHeader: string | undefined;

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.address = ADDRESSES.manhattanStreet;
    this.contact = CONTACT.manhattanPhoneNumber;
    this.borough = ADDRESSES.manhattanBorough;
    this.locationHeader = LABELS.locationLabel;
  }

}
