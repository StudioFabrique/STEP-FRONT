import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICertificats, IClients, IPartenaires, IReseaux } from '../interfaces/ipartenaires';

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  partenaires: IPartenaires[] = [];
  clients: IClients[] = [];
  reseaux: IReseaux[] = [];
  certificats: ICertificats[] = [];

  constructor(private httpServicePartenaires: HttpClient) { }

  getPartenaires$(): Observable<IPartenaires[]>{
    // return this.httpServicePartenaires.get<IPartenaires[]>('/assets/data/partenaires/partenaires.json');
    return this.httpServicePartenaires.get<IPartenaires[]>(environment.JSONBinFiles.LogoPartenaires);
  }

  getClients$(): Observable<IClients[]> {
    return this.httpServicePartenaires.get<IClients[]>(environment.JSONBinFiles.LogoClients);
    // return this.httpServicePartenaires.get<IClients[]>('/assets/data/partenaires/clients.json');
  }

  getReseaux$(): Observable<IReseaux[]> {
    return this.httpServicePartenaires.get<IReseaux[]>(environment.JSONBinFiles.LogoReseaux);
    // return this.httpServicePartenaires.get<IReseaux[]>('/assets/data/partenaires/reseaux.json');
  }
  getCertificats$(): Observable<ICertificats[]> {
    return this.httpServicePartenaires.get<ICertificats[]>(environment.JSONBinFiles.LogoCerts);
    // return this.httpServicePartenaires.get<ICertificats[]>('/assets/data/partenaires/certificats.json');
  }
}
