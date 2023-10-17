import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WordPair } from '../../models/word-pair.model';

@Injectable({
  providedIn: 'root',
})
export class HttpWordPairService {
  constructor(protected httpClient: HttpClient) {}

  getAllWordPairs(): Observable<string[][]> {
    const requestUrl = `${environment.apiBaseUrl}/all-words`;
    return this.httpClient.get<string[][]>(requestUrl);
  }

  addWordPair(initialWord: string, similarWord: string): Observable<WordPair[][]> {
    const requestUrl = `${environment.apiBaseUrl}/add-word`;
    const body = { initialWord, similarWord };
    return this.httpClient.post<WordPair[][]>(requestUrl, body);
  }
}
