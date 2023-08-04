import { createReducer, on } from '@ngrx/store';
import {ArticleState} from 'src/app/ngrx/states/article.state';
import * as ArticleActions from '../actions/article.actions';

export const initualState: ArticleState = {
  isLoading: false,
  isSuccess: false,
  articleList: [],
  error: '',
};

export const articleReducer = createReducer(
  initualState,
  on(ArticleActions.getArticle, (state, action) => {
    console.log(action.type);
    
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(ArticleActions.getArticleSuccess, (state, action) => {
    console.log(action.type);
    
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: true,
      articleList: action.articleList,
    };
    return newState;
  }),
  on(ArticleActions.getArticleFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    return newState;
  }),
);
