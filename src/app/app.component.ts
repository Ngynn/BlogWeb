import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from './ngrx/states/article.state';
import * as ArticleActions from './ngrx/actions/article.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BlogApp';
  constructor(private store: Store<{ article: ArticleState }>) {}

getArticle() {
  this.store.dispatch(ArticleActions.getArticle());
}

  
}
