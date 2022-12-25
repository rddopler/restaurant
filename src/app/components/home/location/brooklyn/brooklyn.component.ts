import {Component, OnInit} from '@angular/core';
import {ADDRESSES, CONTACT} from "../../../../constants/app.constants";

@Component({
  selector: 'app-brooklyn',
  templateUrl: './brooklyn.component.html',
  styleUrls: ['./brooklyn.component.scss']
})
export class BrooklynComponent implements OnInit{

  public address: string | undefined;
  public contact: string | undefined;
  public borough: string | undefined;

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.address = ADDRESSES.brooklynStreet;
    this.contact = CONTACT.brooklynPhoneNumber;
    this.borough = ADDRESSES.brooklynBorough;
  }
}
