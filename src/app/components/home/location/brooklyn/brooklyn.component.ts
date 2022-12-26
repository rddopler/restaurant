import {Component, OnInit} from '@angular/core';
import {ADDRESSES, CONTACT, KEYS, LABELS} from "../../../../constants/app.constants";
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-brooklyn',
  templateUrl: './brooklyn.component.html',
  styleUrls: ['./brooklyn.component.scss']
})
export class BrooklynComponent implements OnInit{

  public address: string | undefined;
  public contact: string | undefined;
  public borough: string | undefined;
  public locationHeader: string | undefined;


  ngOnInit(): void {
    this.loadContent();
    this.loadBrooklynMap();
  }

  loadContent() {
    this.address = ADDRESSES.brooklynStreet;
    this.contact = CONTACT.brooklynPhoneNumber;
    this.borough = ADDRESSES.brooklynBorough;
    this.locationHeader = LABELS.locationLabel;
  }

  loadBrooklynMap() {
    const brooklyn = { lat: 40.64992465955867, lng: -74.00891141306288 };
    const loader = new Loader({
      apiKey: KEYS.googleMapsApiKey
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement,
        {
          center: brooklyn,
          zoom: 11
        })

      const marker = new google.maps.Marker({
        position: brooklyn,
        map: map,
      });
    });
  }
}
