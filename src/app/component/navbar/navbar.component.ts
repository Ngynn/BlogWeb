import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from 'src/app/ngrx/states/article.state';
import { HttpService } from 'src/app/services/http.service';
import * as ArticleActions from '../../ngrx/actions/article.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private store: Store<{ article: ArticleState }>,
    private router: Router
  ) {}

  getArticle() {
    this.store.dispatch(ArticleActions.getArticle());
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
