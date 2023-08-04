import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from 'src/app/services/http.service';
import * as ArticleActions from '../actions/article.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ArticleEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}
    
  
    getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticle),
      exhaustMap(() =>
        this.httpService.getArticle().pipe(
          map((articleImages) => {
            if(articleImages.length > 0) {}
                return ArticleActions.getArticleSuccess({
                articleList: articleImages,
            });
          }),
          catchError((error) => of(ArticleActions.getArticleFailure({ error })))
        )
      )
    )
  );
}
