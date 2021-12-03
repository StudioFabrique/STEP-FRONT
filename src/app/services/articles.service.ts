import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticles } from '../interfaces/iarticles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  casArticles : IArticles[]= []

  constructor(private httpServArticles: HttpClient) { }


  getArticle(){
    return this.httpServArticles.get('http://localhost:4200/assets/data/articles/article.json');
    
  }
}
