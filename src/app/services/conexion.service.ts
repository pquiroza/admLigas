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

  //variables
  private campeonatosCollection: AngularFirestoreCollection<Campeonato>;
  campeonatos: Observable<Campeonato[]>;
  private campeonatoDoc: AngularFirestoreDocument<Campeonato>;
  private noticiasCollection: AngularFirestoreCollection<Noticia>;
  private noticiaDoc: AngularFirestoreDocument<Noticia>;
  noticias: Observable<Noticia[]>;

    //constructor
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

  //métodos
  listaNoticias(idCampeonato: string) {
    this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${idCampeonato}`);
    this.noticiasCollection = this.campeonatoDoc.collection('noticias');
    this.noticias = this.noticiasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Noticia;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.noticias;
  }

  agregarNoticia(idCampeonato: string, noticia: Noticia){
      console.log("va a agregar noticia: ", idCampeonato, noticia);
      this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${idCampeonato}`);
      this.noticiasCollection = this.campeonatoDoc.collection('noticias');
      this.noticiasCollection.add(noticia);
  }

  eliminarNoticia(idCampeonato: string, itemNoticia) {
    console.log("va a eliminar noticia: ", idCampeonato, itemNoticia);
    this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${idCampeonato}`);
    this.noticiasCollection = this.campeonatoDoc.collection('noticias');
    
    //obtener el documento a partir de la coleccion y el id
    this.noticiaDoc = this.noticiasCollection.doc(`${itemNoticia.id}`);
    console.log("documento noticia ", this.noticiaDoc);

    //TODO: eliminar foto en storage
    //quizas se debe guardar el id de la foto en el storage
    let url = itemNoticia.imageUrl;
    

    //eliminar noticia 
    this.noticiaDoc.delete();
  }


  listaCAmpeonatos() {
    return this.campeonatos;
  }

  agregarCampeonato(itemCampeonato: Campeonato) {
    //alert("creando campeonato " + itemCampeonato.nombre);
    this.campeonatosCollection.add(itemCampeonato);
  }
  eliminarCampeonato(itemCampeonato) {
    //alert("chuata va a borrar " + itemCampeonato.id);
    this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${itemCampeonato.id}`);
    this.campeonatoDoc.delete();
  }

  editarCampeonato(itemCampeonato) {
    //alert("alerta va a editar " + itemCampeonato.id);
    this.campeonatoDoc = this.afs.doc<Campeonato>(`Campeonatos/${itemCampeonato.id}`);
    this.campeonatoDoc.update(itemCampeonato);
  }

}
