import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { IImages } from '../interfaces/iimages';

@Injectable({
  providedIn: 'root',
})
export class FirebaseImagesService {
  images: IImages[] = [];
  storage = getStorage();

  listEditique = ref(this.storage, 'editique/');
  listNumerisation = ref(this.storage, 'numerisation/');
  listTraitementDonnees = ref(this.storage, 'traitement_donnees/'); 
  listFormations_courtes = ref(this.storage, 'formations_courtes/');
  listFormations_longues = ref(this.storage, 'formations_longues/');
  listAtelier_materiel = ref(this.storage, 'atelier_materiel/');
  listAtelier_assistance = ref(this.storage, 'atelier_assistance/');
  listlivraison = ref(this.storage, 'livraison/');
  listConciergerie = ref(this.storage, 'conciergerie/');
  listService_postal = ref(this.storage, 'service_postal/');
  listInclusion = ref(this.storage, 'inclusion/');
  
 

  constructor(public firebaseStorage: AngularFireStorage) {}

  getEditiqueIMG$() {
    listAll(this.listEditique).then((data) => {
      data.items.forEach((itemRef) => {
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
    listAll(this.listNumerisation).then((data) => {
      data.items.forEach((itemRef) => {
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
    listAll(this.listTraitementDonnees).then((data) => {
      data.items.forEach((itemRef) => {
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
    listAll(this.listFormations_courtes).then((data) => {
      data.items.forEach((itemRef) => {
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
    listAll(this.listFormations_longues).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getAtelierMaterielIMG$() {
    listAll(this.listAtelier_materiel).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }
  getAtelierAssistanceIMG$() {
    listAll(this.listAtelier_assistance).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getLivraisonIMG$() {
    listAll(this.listlivraison).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getServicePostal$() {
    listAll(this.listService_postal).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getConciergerie$() {
    listAll(this.listConciergerie).then((data) => {
      data.items.forEach((itemRef) => {
        this.firebaseStorage
          .ref(itemRef.fullPath)
          .getDownloadURL()
          .subscribe((res: any) => {
            this.images.push(res);
          });
      });
    });
  }

  getInclusion$() {
    listAll(this.listInclusion).then((data) => {
      data.items.forEach((itemRef) => {
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
