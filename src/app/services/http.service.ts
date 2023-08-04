import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get<Article[]> ("https://social.runwayclub.dev/api/articles/latest");
  }
}
