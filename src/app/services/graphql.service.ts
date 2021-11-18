import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  menus:any;

  constructor(private apollo:Apollo) {
  }
  /** Obtenir la liste des menus disponibles */
  getMenus(){
    this.apollo
      .watchQuery({
        query: gql`
        {
          listLiens {
            items {
              titre
              description
              alias
              url
              id
              Articles {
                items {
                  id
                }
              }
              Categories {
                items {
                  id
                }
              }
              Menus {
                items {
                  titre
                  id
                }
              }
              Plugins {
                items {
                  id
                }
              }
            }
          }
          listMenus(filter: {acces: {eq: 0}}) {
            items {
              liensID
              id
              acces
              titre
              updatedAt
              _version
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.menus = result?.data?.menus;
        console.log("Menus", result)
        console.log(result.loading);
        console.log(result.error);
      });
  }
  /** Obtenir la liste des liens du site */
  getArticles(cat:any){
    this.apollo
    .watchQuery({
      query: gql`
        {
          listMenus(filter: {acces: {eq: 0}}){
            items {
              liensID
              id
              acces
              titre
              updatedAt
              _version
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.menus = result?.data?.menus;
      console.log("Menus", result)
      console.log(result.loading);
      console.log(result.error);
    });
  }
}
