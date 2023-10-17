import { Component, OnInit } from '@angular/core';
import { HttpWordPairService } from '../common/services/http-word-pair/http-word-pair.service';
import { OnDispose } from '../common/services/on-dispose/on-despose';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-words',
  templateUrl: './search-words.component.html',
  styleUrls: ['./search-words.component.scss'],
})
export class SearchWordsComponent extends OnDispose implements OnInit {
  allWordPairs: string[][] = [];
  searchedPairs: string[] = [];
  isInputTouched = false;

  constructor(protected httpWordPairService: HttpWordPairService) {
    super();
  }

  ngOnInit(): void {
    this.loadWordPairs();
  }

  loadWordPairs(): void {
    this.httpWordPairService
      .getAllWordPairs()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        this.allWordPairs = result;
      });
  }

  searchForWord(searchedWord: string): void {
    // Reset the previous search result
    this.searchedPairs = [];

    // Check if the search word is not empty
    if (searchedWord.trim() !== '') {
      // Convert the search word to lowercase for case-insensitive comparison
      const lowerCaseSearchedWord = searchedWord
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();

      // Iterate through each word in allWordPairs
      for (const innerArray of this.allWordPairs) {
        // Check if the searched word exists in the current array (case-insensitive)
        if (
          innerArray.some(
            (word) => word.toLowerCase() === lowerCaseSearchedWord
          )
        ) {
          // If the searched word is found, add all words from the array to the result
          this.searchedPairs = this.searchedPairs.concat(innerArray);
        }
      }

      // Remove the searched word itself from the search result (case-insensitive)
      this.searchedPairs = this.searchedPairs.filter(
        (word) => word.toLowerCase() !== lowerCaseSearchedWord
      );

      // Use a Set to eliminate duplicates and convert it back to an array
      this.searchedPairs = [...new Set(this.searchedPairs)];
    }
  }

  searchData(searchedData?: string): void {
    if (searchedData) {
      this.isInputTouched = true;
      this.searchForWord(searchedData);
    } else {
      this.clearData();
      this.isInputTouched = false;
    }
  }
  clearData() {
    this.searchedPairs = [];
  }
}
