import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  public listarExperiencias(){
    return this.http.get(`${baserUrl}/experiencia/`);
  }
}
