import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpWordPairService } from './common/services/http-word-pair/http-word-pair.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-similarities-angular-app';
}
