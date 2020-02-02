import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Campeonato } from './../campeonato';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private campeonatosCollection: AngularFirestoreCollection<Campeonato>;
  campeonatos: Observable<Campeonato[]>;
  private campeonatoDoc: AngularFirestoreDocument<Campeonato>;
  
  constructor(private afs: AngularFirestore) { 
    this.campeonatosCollection = afs.collection<Campeonato>('Campeonatos');
    this.campeonatos = this.campeonatosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Campeonato;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

listaCAmpeonatos(){
  return this.campeonatos;
}

agregarCampeonato(campeonato: Campeonato) {
  alert("creando campeonato "+campeonato.nombre);
  this.campeonatosCollection.add(campeonato);
}
eliminarCampeonato(item){
  alert("chuata va a borrar "+ item.id);
  this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${item.id}`);
  this.campeonatoDoc.delete();

}

editarCampeonato(item){
  alert("alerta va a editar "+ item.id);
  this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${item.id}`);
  this.campeonatoDoc.update(item);

}

}
