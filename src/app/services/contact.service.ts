import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IContact } from '../interfaces/icontact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: IContact[] = [];

  serverURL ='https://script.google.com/macros/s/AKfycby1V59j2CIPWVf2gH7s3fB6U4ewE8lHD21114DZw6AIORILAczLH3-vFlJ5owuVfpUP/exec';
  

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