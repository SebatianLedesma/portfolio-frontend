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

  public listarExperiencias(){
    return this.http.get(`${baseUrl}/experiencia/`);
  }

  public detalleExperiencia(id:number):Observable<Object>{
  return  this.http.delete<Experiencia>(`${baseUrl}/experiencia/${id}`);  
  }

  //Metodo para obtener usuarios.

  obtenerListaDeExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${baseUrl}`);
  }

  //Metodo para agregar Experiencia.
  agregarExperiencia(experiencia:Experiencia) : Observable<Object>{
    return this.http.post(`${baseUrl}`,experiencia)
  }

  //Metodo para actualizar Experiencia
  actualizarExperiencia(id:number, experiencia:Experiencia) : Observable<Object>{
    return this.http.put(`${baseUrl}/${id}`,experiencia);
  }

  //Metodo para obtener o buscar Experiencia.
  obtenerExperienciaPorId(id:number) : Observable<Experiencia>{
    return this.http.get<Experiencia>(`${baseUrl}/${id}`);
  }
    
  //Metodo para eliminar Experiencia.
  eliminarUsuario(id:number) : Observable<Object>{
    return this.http.delete<Experiencia>(`${baseUrl}/${id}`);
  }
}