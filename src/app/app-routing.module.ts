import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWordPairComponent } from './new-word-pair/new-word-pair.component';
import { SearchWordsComponent } from './search-words/search-words.component';
import { WordPairsComponent } from './word-pairs/word-pairs.component';

const routes: Routes = [
  { path: 'search-words', component: SearchWordsComponent },
  { path: 'all-word-pairs', component: WordPairsComponent },
  { path: 'add-new-word-pair', component: NewWordPairComponent },
  { path: '', redirectTo: '/search-words', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
