import { Component, OnInit } from '@angular/core';
import { IMetiersList } from 'src/app/interfaces/imetier-details-headers';
import { IPartenaires } from 'src/app/interfaces/ipartenaires';
import { MetiersDetailsHeadersService } from 'src/app/services/metiers-details-headers.service';
import { PartenairesService } from 'src/app/services/partenaires.service';


export interface Content {
  image: string,
  text: string,
  title: string
}



@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit {

  partenaires: IPartenaires[] = []
  metiersList: IMetiersList[] = []


  cornerImg="assets/img/corner-orange.png" 
  title="Des solutions et des métiers " 
  titleBold="adaptés à vos besoins" 
  text="STEP vous accompagne en vous proposant des solutions globales et ses expertises dans plusieurs grands secteurs d’activités. Les flux documentaires et le back office, les services de territoire et l’ingénierie informatique." 
  bg="../../../assets/img/solutions.png"

  
  constructor(public partenaireServ: PartenairesService, public metierServ: MetiersDetailsHeadersService) {}



  ngOnInit(): void {
    this.partenaireServ.getPartenaires$().subscribe(
      res => {
        this.partenaires = res;
        console.log(res);
        
      }
    );

    this.metierServ.getMetiers$();
  }



  gridColumns = 3;

}
