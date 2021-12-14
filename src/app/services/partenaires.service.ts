import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClients, IPartenaires } from '../interfaces/ipartenaires';

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  partenaires: IPartenaires[] = [];
  clients: IClients[] = [];

  constructor(private httpServicePartenaires: HttpClient) { }

  getPartenaires$(): Observable<IPartenaires[]>{
    return this.httpServicePartenaires.get<IPartenaires[]>('http://localhost:4200/assets/data/partenaires/partenaires.json');
  }

  getClients$(): Observable<IClients[]> {
    return this.httpServicePartenaires.get<IClients[]>('http://localhost:4200/assets/data/partenaires/clients.json');
  }
}
