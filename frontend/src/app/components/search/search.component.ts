import { Component, OnInit, output } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  searchText = output<string>();

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(100) // delay in ms
    ).subscribe(value => this.search(value));
  }

  search(value: string) {
    console.log('Searching for:', value);
    this.searchText.emit(value);
  }
}
