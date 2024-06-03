import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmActionsService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  startLoading() {
    this.isLoadingSubject.next(true);
  }

  stopLoading() {
    this.isLoadingSubject.next(false);
  }

  isLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

}
