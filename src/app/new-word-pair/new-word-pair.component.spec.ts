import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWordPairComponent } from './new-word-pair.component';

describe('NewWordPairComponent', () => {
  let component: NewWordPairComponent;
  let fixture: ComponentFixture<NewWordPairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWordPairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWordPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
