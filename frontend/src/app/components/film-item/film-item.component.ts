import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.scss'
})
export class FilmItemComponent {
  @Input() film: any;
}
