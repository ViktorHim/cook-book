import { Injectable } from '@angular/core';
import { Unit } from '../types/unit.type';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirestoreCollections } from 'src/config/firestore.config';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor(private firestore: AngularFirestore) {}

  getUnits(): Observable<Unit[]> {
    return this.firestore
      .collection<Unit>(FirestoreCollections.UNITS)
      .valueChanges();
  }
}
