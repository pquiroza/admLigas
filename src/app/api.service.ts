import { Injectable } from '@angular/core';
import { environment2 } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Campeonato } from './model/campeonato';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = environment2.apiURL;

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { 
  }

  //GET ALL
  obtenerCampeonatos(): Observable<Campeonato>{
    
    console.log('api service obtener todos');
    return this.http.get<Campeonato>(this.baseURL+'getcampeonatos')
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
 
   //GET
   obtenerCampeonato(id): Observable<Campeonato> {
    console.log('api service obtener ', id);
     return this.http.get<Campeonato>(this.baseURL + 'getcampeonato/' + id)
     .pipe(
       retry(1),
       catchError(this.errorHandler)
     )
   }

  //POST
  agregarCampeonato(campeonato: any): Observable<Campeonato>{
    let json = JSON.stringify(campeonato);
    console.log('api service agregar ', json);
    return this.http.post<Campeonato>(this.baseURL+'putCampeonato', json, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
 
   //PUT
   actualizarCampeonato(campeonato): Observable<Campeonato> {
     let json = JSON.stringify(campeonato);
     console.log('api service actualizar ', json);
     return this.http.put<Campeonato>(this.baseURL + 'updCampeonato', json, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.errorHandler)
     )
   }
 
   //DELETE
   borrarCampeonato(id){
    console.log('api service borrar ', id);
     return this.http.delete<Campeonato>(this.baseURL + 'delCampeonato' + id, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.errorHandler)
     )
   }
 
   // Manejo de errores
   errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Código de error: ${error.status}\nMensage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }

}
