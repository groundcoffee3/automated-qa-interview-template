import { Component } from '@angular/core';
import { FilmActionsService } from '../../shared/film-actions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  isLoading = false;
  private subscription = new Subscription();
  constructor(private filmActionsService: FilmActionsService) { 
    this.subscription.add(
      this.filmActionsService.isLoading().subscribe((isLoading) => {
        this.isLoading = isLoading;
      })
    );
  }

  onButtonClick() {
    this.isLoading = true;
    this.filmActionsService.startLoading();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
