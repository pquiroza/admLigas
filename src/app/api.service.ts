import { Injectable } from '@angular/core';
import { environment2 } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campeonato } from './model/campeonato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = environment2.apiURL;

  constructor(private http: HttpClient) { 

  }

  getCampeonatos(): Observable<Campeonato>{
    return this.http.get<Campeonato>(this.baseURL+'getcampeonatos');
  }

  addCampeonato(campeonato: any){
    console.log('api service add');
    let json = JSON.stringify(campeonato);
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.baseURL+'putCampeonato', json, {headers: headers});
  }

  updateCampeonato(campeonato: any){
    console.log('api service update');
  }

  deleteCampeonato(campeonato: any){
    console.log('api service delete');
  }
  

}
