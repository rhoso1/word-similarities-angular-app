import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpErrorHandlerService } from './services/http-error-handler/http-error-handler.service';
import { HttpWordPairService } from './services/http-word-pair/http-word-pair.service';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { ErrorLabelComponent } from './components/error-label/error-label.component';

@NgModule({
  imports: [AngularCommonModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, SearchComponent, WordCardComponent, ErrorLabelComponent],
  declarations: [HeaderComponent, FooterComponent, SearchComponent, MenuDropdownComponent, WordCardComponent, ErrorLabelComponent],
  providers: [HttpWordPairService, HttpErrorHandlerService],
})
export class CommonModule {}
