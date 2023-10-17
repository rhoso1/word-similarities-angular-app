import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder = 'Search';
  @Output() searchDataInput: EventEmitter<any> = new EventEmitter<string>();
  @Output() clearSearchData: EventEmitter<void> = new EventEmitter<void>();
  @Output() isInputTouched: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  searchQuery = '';

  clearSearch(): void {
    this.searchQuery = '';
    this.clearSearchData.emit();
  }

  searchData(): void {
    this.searchDataInput.emit(this.searchQuery);
  }
}
