import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {  
  
  baseUrl=environment.URL +'experiencia/';

  constructor(private http:HttpClient) { }

  //Metodo para cargar lista de experiencias.  
  public listarExperiencias(){
    return this.http.get(`${baseUrl}/experiencia/`);
  }
  //Metodo para agregar Experiencia.
  public agregarExperiencia(experiencia:any){
    return this.http.post(`${baseUrl}/experiencia/`, experiencia);
  }
  //Metodo para actualizar Experiencia
  public actualizarExperiencia(experiencia:any){
    return this.http.put(`${baseUrl}/experiencia/`, experiencia);
  }
  //Metodo para obtener o buscar Experiencia.
  public obtenerExperienciaPorId(experienciaId:any){
    return this.http.get(`${baseUrl}/experiencia/${experienciaId}`);
  }    
  //Metodo para eliminar Experiencia.
  public eliminarExperiencia(experienciaId:any){
    return this.http.delete(`${baseUrl}/experiencia/${experienciaId}`);
  }
}