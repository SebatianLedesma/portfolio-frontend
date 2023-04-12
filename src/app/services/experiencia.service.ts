import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {  
  
  baseUrl=environment.URL;

  constructor(private http:HttpClient) { }

  //Metodo para cargar lista de experiencias.  
  public listarExperiencias(){
    return this.http.get(this.baseUrl + `experiencia/`);
  }
  //Metodo para agregar Experiencia.
  public agregarExperiencia(experiencia:any){
    return this.http.post(this.baseUrl + `experiencia/`, experiencia);
  }
  //Metodo para actualizar Experiencia
  public actualizarExperiencia(experiencia:any){
    return this.http.put(this.baseUrl + `experiencia/`, experiencia);
  }
  //Metodo para obtener o buscar Experiencia.
  public obtenerExperienciaPorId(experienciaId:any){
    return this.http.get(this.baseUrl + `experiencia/${experienciaId}`);
  }    
  //Metodo para eliminar Experiencia.
  public eliminarExperiencia(experienciaId:any){
    return this.http.delete(this.baseUrl + `experiencia/${experienciaId}`);
  }
}