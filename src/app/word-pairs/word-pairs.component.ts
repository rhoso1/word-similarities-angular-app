import { Component, OnInit } from '@angular/core';
import { HttpWordPairService } from '../common/services/http-word-pair/http-word-pair.service';
import { OnDispose } from '../common/services/on-dispose/on-despose';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-word-pairs',
  templateUrl: './word-pairs.component.html',
  styleUrls: ['./word-pairs.component.scss']
})
export class WordPairsComponent extends OnDispose implements OnInit{
  allWordPairs: string[][] = [];
  constructor(protected httpWordPairService: HttpWordPairService) {
super()
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
}
