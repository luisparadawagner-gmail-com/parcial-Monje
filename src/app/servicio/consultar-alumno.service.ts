import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarAlumnoService {
  constructor(private httpClient: HttpClient){}

  getAlumnos(): Observable<any>{
      return this.httpClient.get('./assets/Alumnos.json');
  }
}
