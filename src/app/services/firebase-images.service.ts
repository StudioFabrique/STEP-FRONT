import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { observable, Observable, of } from 'rxjs';
import { IImages } from '../interfaces/iimages';

@Injectable({
  providedIn: 'root',
})
export class FirebaseImagesService {
  images: IImages[] = [];
  storage = getStorage();

  constructor(public firebaseStorage: AngularFireStorage) {}

  getEditiqueIMG$() {
    const listRef = ref(this.storage, 'editique/');
    listAll(listRef).then((data) => {
      data.items.forEach((itemRef) => {
        // console.log(itemRef.fullPath);
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getNumerisationIMG$() {
    const listRef = ref(this.storage, 'numerisation/');
    listAll(listRef).then((data) => {
      data.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getTraitementDonneesIMG$() {
    const listRef = ref(this.storage, 'traitement_donnees');
    listAll(listRef).then((data) => {
      data.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getFormationsCourtesIMG$() {
    const listRef = ref(this.storage, 'formations_courtes/');
    listAll(listRef).then((data) => {
      data.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getFormationsLonguesIMG$() {
    const listRef = ref(this.storage, 'formations_longues/');
    listAll(listRef).then((data) => {
      data.items.forEach((itemRef) => {
        console.log(itemRef.fullPath);
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }
}
