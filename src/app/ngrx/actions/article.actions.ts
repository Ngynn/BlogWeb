import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/models/article.model'; 

export const getArticle = createAction('[Article] Get Article');
export const getArticleSuccess = createAction(
  '[Article] Get Article Success',
  props<{ articleList: Article[] }>()
);
export const getArticleFailure = createAction(
  '[Article] Get Article Failure',
  props<{ error: any }>()
);


