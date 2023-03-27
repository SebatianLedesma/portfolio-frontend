import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Models/Experiencia';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {   

  constructor(private http:HttpClient) { }

  //Metodo para cargar experiencias.
  
  public listarExperiencias(){
    return this.http.get(`${baseUrl}/experiencia/`);
  }

  public detalleExperiencia(id:number):Observable<Experiencia>{
    return  this.http.delete<Experiencia>(`${baseUrl}/experiencia/${id}`);  
  }

  //Metodo para agregar Experiencia.
  public agregarExperiencia(experiencia:any){
    return this.http.post(`${baseUrl}/experiencia/`, experiencia);
  }

  //Metodo para actualizar Experiencia
  public actualizarExperiencia(id:number, experiencia:Experiencia) : Observable<Object>{
    return this.http.put(`${baseUrl}/${id}`,experiencia);
  }

  //Metodo para obtener o buscar Experiencia.
  public obtenerExperienciaPorId(id:number) : Observable<Experiencia>{
    return this.http.get<Experiencia>(`${baseUrl}/${id}`);
  }
    
  //Metodo para eliminar Experiencia.
  public eliminarExperiencia(experienciaId:any){
    return this.http.delete(`${baseUrl}/experiencia/${experienciaId}`);
  }
}