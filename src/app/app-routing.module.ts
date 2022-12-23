import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ManhattanComponent} from "./components/home/location/manhattan/manhattan.component";
import {BrooklynComponent} from "./components/home/location/brooklyn/brooklyn.component";
import {MenuComponent} from "./components/menu/menu.component";
import {PrivateDiningComponent} from "./components/private-dining/private-dining.component";
import {PageNotFoundComponent} from "./components/common/page-not-found/page-not-found.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manhattan', component: ManhattanComponent },
  { path: 'brooklyn', component: BrooklynComponent },
  { path: 'menus', component: MenuComponent },
  { path: 'private-dining', component: PrivateDiningComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
