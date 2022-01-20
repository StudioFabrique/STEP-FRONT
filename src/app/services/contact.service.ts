import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { IContact } from '../interfaces/icontact';


@Injectable({
  providedIn: 'root'
})


export class ContactService {


  headers = new HttpHeaders()

  contact: IContact[] = [];
  formspree = 'https://formspree.io/f/xzbobqzj'
  serverURL ='https://script.google.com/a/macros/fabriquenumerique.fr/s/AKfycbx1MXDhIual2MweVZIWhV6CASlmXbLK8lnKWVsinc4ogH-lJFkuxEhjyqytSbUi8NeCXA/exec';
  constructor(private httpServ: HttpClient) {}

 

  PostMessage(input: any) {
    this.headers.set('content-type', 'application/json')
    this.headers.set('Access-Control-Allow-Origin', '*')
    
    return this.httpServ.post(this.serverURL, input,  {

      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }

   
    })
      .pipe(
        map(
          (response:any) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

  

  // deplymenID:"AKfycby1V59j2CIPWVf2gH7s3fB6U4ewE8lHD21114DZw6AIORILAczLH3-vFlJ5owuVfpUP"
  // handleError = {};






 
}



























// export class ContactService {



//   contact: IContact[] = [];

//   serverURL ='https://script.google.com/macros/s/AKfycby1V59j2CIPWVf2gH7s3fB6U4ewE8lHD21114DZw6AIORILAczLH3-vFlJ5owuVfpUP/exec';
//   errorData = {};

//   // deplymenID:"AKfycby1V59j2CIPWVf2gH7s3fB6U4ewE8lHD21114DZw6AIORILAczLH3-vFlJ5owuVfpUP"
//   // handleError = {};

//   httpOptions = {
//     headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
//   }
  


//   constructor(private http: HttpClient) { }

//   contactForm$(formdata: IContact[]){
//     return this.http.post<IContact[]>(this.serverURL, formdata, this.httpOptions).pipe(
//       catchError(this.handleError)
//     );
//   }

// private handleError(error: HttpErrorResponse){
//   if(error.error instanceof ErrorEvent){
//     console.error(`l'erreur est: ${error.error.message}`);
//   }else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong.
//     console.error(`ErrorCode: ${error.status}, ` + `body: ${error.error}`);
//   }

//     this.errorData = {
//       errorTitle: 'Oops! ',
//       errorDesc: 'Something bad happened. Please try again later.'
//     };
//     return throwError(this.errorData);
//   }
// }