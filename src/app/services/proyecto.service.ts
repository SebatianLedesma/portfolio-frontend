import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';;

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }
  
  public listarProyectos(){
    return this.http.get(`${baserUrl}/proyecto/`);
  }
}
