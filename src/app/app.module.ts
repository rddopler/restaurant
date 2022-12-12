import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrivateDiningComponent } from './components/private-dining/private-dining.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ManhattanComponent } from './components/home/location/manhattan/manhattan.component';
import { BrooklynComponent } from './components/home/location/brooklyn/brooklyn.component';
import { DessertsComponent } from './components/menu/desserts/desserts.component';
import { DinnerComponent } from './components/menu/dinner/dinner.component';
import { TastingComponent } from './components/menu/tasting/tasting.component';
import { WineComponent } from './components/menu/wine/wine.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    PrivateDiningComponent,
    ReservationComponent,
    ManhattanComponent,
    BrooklynComponent,
    DessertsComponent,
    DinnerComponent,
    TastingComponent,
    WineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
