import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Models/Proyecto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  baseUrl=environment.URL;

  constructor(private http:HttpClient) { }
  
  //Metodo para cargar lista de proyectos.
  public listarProyectos(){
    return this.http.get(this.baseUrl + `proyecto/`);
  }
  //Metodo para agregar proyecto.
  public agregarProyecto(proyecto:any){
    return this.http.post(this.baseUrl + `proyecto/`, proyecto);
  }
  //Metodo para actualizar proyecto
  public actualizarProyecto(proyecto:any){
    return this.http.put(this.baseUrl + `proyecto/`, proyecto);
  }
  //Metodo para obtener proyecto.
  public obtenerProyectoPorId(proyectoId:any){
    return this.http.get(this.baseUrl + `proyecto/${proyectoId}`);
  }
  //Metodo para eliminar proyecto.    
  public eliminarProyecto(proyectoId:any){
    return this.http.delete(this.baseUrl + `proyecto/${proyectoId}`);
  }
}
