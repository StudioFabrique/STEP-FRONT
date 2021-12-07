import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartenaires } from '../interfaces/ipartenaires';

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  partenaires: IPartenaires[] = [];

  constructor(private httpServicePartenaires: HttpClient) { }

  getPartenaires(){
    this.httpServicePartenaires.get('http://localhost:4200/assets/data/partenaires/partenaires.json').subscribe((data:any) => {
        this.partenaires = data;
        console.log('partenaire:', this.partenaires);
    });
  }
}
