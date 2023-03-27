import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Models/Proyecto';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  constructor(private http:HttpClient) { }
  
  public listarProyectos(){
    return this.http.get(`${baseUrl}/proyecto/`);
  }   
  

  public detalleProyecto(proyectoId:number):Observable<Proyecto>{
    return  this.http.delete<Proyecto>(`${baseUrl}/proyecto/${proyectoId}`);  
  }

  public agregarProyecto(proyecto:any){
    return this.http.post(`${baseUrl}/proyecto/`, proyecto);
  }

  public actualizarProyecto(proyectoId:number, proyecto:Proyecto) : Observable<Object>{
    return this.http.put(`${baseUrl}/${proyectoId}`,proyecto);
  }
 
  public obtenerProyectoPorId(proyectoId:number) : Observable<Proyecto>{
    return this.http.get<Proyecto>(`${baseUrl}/${proyectoId}`);
  }
      
  public eliminarProyecto(proyectoId:any){
    return this.http.delete(`${baseUrl}/proyecto/${proyectoId}`);
  }
}
