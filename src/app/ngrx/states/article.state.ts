import { Article } from "src/app/models/article.model";

export interface ArticleState {
  isLoading: boolean;
  isSuccess: boolean;
  articleList: Article[];
  error: string;
}
