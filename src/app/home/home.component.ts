import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable, mergeMap } from 'rxjs';
import { Article } from '../models/article.model';
import { Store } from '@ngrx/store';
import { ArticleState } from '../ngrx/states/article.state';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  articleList: Article[] = [];

  articleList$: Observable<Article[]> = this.store.select(
    'article',
    'articleList'
  );
  constructor(
    private httpService: HttpService,
    private store: Store<{ article: ArticleState }>

  ) {
    this.articleList$.subscribe((articleList) => {
      if (articleList.length > 0) {
        console.log(articleList);
        
        this.articleList = articleList;
      }
    });
  }

  

  // ngOnDestroy(): void {
  //   console.log('home component destroyed');
  // }
  // ngOnInit(): void {
  //   this.articleList$.subscribe((articleList) => {
  //     if (articleList.length > 0) {
  //       console.log(articleList);
  //     }
  //   });
  // }
}
