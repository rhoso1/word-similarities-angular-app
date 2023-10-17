import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { SearchWordsComponent } from './search-words/search-words.component';
import { WordPairsComponent } from './word-pairs/word-pairs.component';
import { NewWordPairComponent } from './new-word-pair/new-word-pair.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchWordsComponent,
    WordPairsComponent,
    NewWordPairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
