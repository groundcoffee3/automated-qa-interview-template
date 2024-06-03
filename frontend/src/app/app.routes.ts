import { Routes } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'films'},
    {path: 'films', pathMatch: 'full', component: FilmsListComponent},
];
