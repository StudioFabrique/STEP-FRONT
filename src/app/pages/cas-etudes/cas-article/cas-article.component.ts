import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticles } from 'src/app/interfaces/iarticles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-cas-article',
  templateUrl: './cas-article.component.html',
  styleUrls: ['./cas-article.component.css'],
})
export class CasArticleComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    public articleServ: ArticlesService
  ) {}

  article: any;
  articlesArray: any 
  private sub: any;
  id: any;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; 
      
    });

    this.articleServ.getArticle().subscribe((data: any) => {
      this.articlesArray = data.filter((article:any) => {
        return article.id === this.id
      });
      console.log(this.articlesArray);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  bgImg="assets/img/office.jpg"
  corner = "assets/corners/blue_orange.png"
  title = "Pau nous confie son courrier "
  accroche = "Un service postal privé "

  text = "Près de 100 000 courriers par an sont pris en charge par STEP depuis 2012 pour le compte d’une trentaine de clients, comme la Mairie de Pau qui nous fait confiance, lui permettant de se concentrer sur son cœur d’activité. Une économie de 10 à 40 % selon les structures !"
  bgColor= "green"
}
