import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HttpClientModule],
  providers: [ApiService, HttpClient],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHelloWorld().subscribe((data) => {
      this.message = data;
    });
  }
}
