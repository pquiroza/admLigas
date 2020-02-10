import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Campeonato } from './../campeonato';
import { Noticia } from './../noticia';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private campeonatosCollection: AngularFirestoreCollection<Campeonato>;
  campeonatos: Observable<Campeonato[]>;
  private campeonatoDoc: AngularFirestoreDocument<Campeonato>;
  private noticiasCollection: AngularFirestoreCollection<Noticia>;
  noticias: Observable<Noticia[]>;
  
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


listaNoticias(item)
{
  this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${item.id}`);

  this.noticiasCollection = this.campeonatoDoc.collection('noticias');
  this.noticias = this.noticiasCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Noticia;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
  
  return this.noticias;
  //this.noticiasCollection=this.afs.collection<Noticia>('Noticias');
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
