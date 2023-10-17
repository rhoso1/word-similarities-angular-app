import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from '../../constants/menu-items.const';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent {
  menuItems = menuItems;
  @Input() isExpanded = false;

  constructor(protected router: Router) {}

  //this part should be dynamically and moved to parent component
  navigateToAll(): void {
    this.router.navigate(['/all-word-pairs']);
  }
  navigateToAdd(): void {
    this.router.navigate(['/add-new-word-pair']);
  }
  performAction(action: string) {
    if (action === 'navigateToAll') {
      this.navigateToAll();
    } else if (action === 'navigateToAdd') {
      this.navigateToAdd();
    }
  }
}
