import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "./components/search/search.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HttpClientModule, ButtonComponent, NavComponent, FilmsListComponent, RouterOutlet, SearchComponent],
  providers: [HttpClient],
  standalone: true,
})
export class AppComponent {

}
