import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Models/Educacion';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) {}

  public listarEducaciones(){
    return this.http.get(`${baseUrl}/educacion/`);
  }

  public detalleEducacion(educacionId:number):Observable<Educacion>{
    return  this.http.delete<Educacion>(`${baseUrl}/educacion/${educacionId}`);  
  }

  public agregarEducacion(educacion:any){
    return this.http.post(`${baseUrl}/educacion/`, educacion);
  }

  public actualizarEducacion(educacionId:number, educacion:Educacion) : Observable<Object>{
    return this.http.put(`${baseUrl}/${educacionId}`,educacion);
  }
 
  public obtenerEducacionPorId(educacionId:number) : Observable<Educacion>{
    return this.http.get<Educacion>(`${baseUrl}/${educacionId}`);
  }
      
  public eliminarEducacion(educacionId:any){
    return this.http.delete(`${baseUrl}/educacion/${educacionId}`);
  }
}
