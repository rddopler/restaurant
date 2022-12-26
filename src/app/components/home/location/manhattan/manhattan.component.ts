import {Component, OnInit} from '@angular/core';
import {ADDRESSES, CONTACT, KEYS, LABELS} from "../../../../constants/app.constants";
import {Loader} from "@googlemaps/js-api-loader";

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
    this.loadManhattanMap();
  }

  loadContent() {
    this.address = ADDRESSES.manhattanStreet;
    this.contact = CONTACT.manhattanPhoneNumber;
    this.borough = ADDRESSES.manhattanBorough;
    this.locationHeader = LABELS.locationLabel;
  }

  loadManhattanMap() {
    const manhattan = { lat: 40.75875338574843, lng: -73.97699630117748 };
    const loader = new Loader({
      apiKey: KEYS.googleMapsApiKey
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement,
        {
          center: manhattan,
          zoom: 11
        })

      const marker = new google.maps.Marker({
        position: manhattan,
        map: map,
      });
    });
  }
}
