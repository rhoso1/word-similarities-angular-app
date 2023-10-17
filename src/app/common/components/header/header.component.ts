import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isExpanded = false;

  constructor(protected router: Router, protected elementRef: ElementRef) {}

  navigateToHomePage(): void {
    this.router.navigate(['/search-words']);
  }

  @HostListener('document:click', ['$event.target'])
  checkOutsideClick(targetElement: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.isExpanded = false;
    }
  }
}
