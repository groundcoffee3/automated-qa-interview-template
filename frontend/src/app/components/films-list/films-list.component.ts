import { CommonModule } from '@angular/common';
import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import { FilmItemComponent } from '../film-item/film-item.component';
import { FilmsService } from '../../films.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmActionsService } from '../../shared/film-actions.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [CommonModule, FilmItemComponent, HttpClientModule, ButtonComponent, SkeletonComponent, SearchComponent],
  providers: [FilmsService],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss'
})
export class FilmsListComponent {
  subscription: Subscription = new Subscription();
  searchTextSignal: WritableSignal<string> = signal('');
  films: WritableSignal<any[]> = signal([]);

  constructor(private filmsService: FilmsService, private filmActionsService: FilmActionsService) { }

  filmsLoading = false;

  filteredFilms: Signal<any[]> = computed(() => {
    const films = this.films();
    const searchText = this.searchTextSignal();
    if (!searchText) {
      return films;
    }
    return films.filter((film) => film.title.toLowerCase().includes(searchText.toLowerCase()));
  })

  ngOnInit() {
    this.subscription.add(
      this.filmActionsService.isLoading().subscribe((isLoading) => {
        if (isLoading) {
          this.fetchFilms();
        }
      })
    );
  }

  fetchFilms() {
    this.filmsLoading = true;
    this.filmsService.getStarWarsFilms().subscribe({
      next: (films) => {
        this.films.set(films);
        this.filmsLoading = false;
      },
      error: (error) => {
        //TODO: We can create a component that displays error messages. Add state logic here for that component.
        console.error('Error fetching Star Wars films:', error);
      },
      complete: () => {
        this.filmActionsService.stopLoading();
      }
    });
  }


  updateSearchText(searchText: string) {
    this.searchTextSignal.set(searchText);
  }
}
