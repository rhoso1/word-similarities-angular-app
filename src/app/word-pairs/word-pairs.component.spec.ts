import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPairsComponent } from './word-pairs.component';

describe('WordPairsComponent', () => {
  let component: WordPairsComponent;
  let fixture: ComponentFixture<WordPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordPairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
