import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticles } from 'src/app/interfaces/iarticles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-cas-etudes',
  templateUrl: './cas-etudes.component.html',
  styleUrls: ['./cas-etudes.component.css']
})
export class CasEtudesComponent implements OnInit {

  articles: IArticles[] = []

  constructor(public articleServ: ArticlesService, private router: Router ) { }

  ngOnInit(): void {
    this.articleServ.getArticle().subscribe((data:any) => {
      this.articles = data;
      console.log(this.articles);
    });
      
  }
  
  navigateToArticle(id: any){
    console.log(id);
    
    this.router.navigate(["cas-etudes/cas-article", id], {
      // queryParams:{id: id}
    })
  }


  // bgImg="assets/img/office.jpg"
  // corner = "assets/corners/blue_orange.png"
  // title = "Nos Cas d'Etudes"
  // accroche = "Tous nos cas d'etudes et nos réalisations"
  // text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sagittis odio. Cras sit amet interdum eros. Proin varius arcu eget eros varius luctus. Proin mi ligula, tempus non feugiat vitae, venenatis vel magna. "
  // bgColor= "gray"
}
