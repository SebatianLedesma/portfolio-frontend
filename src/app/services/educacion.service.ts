import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  baseUrl=environment.URL;

  constructor(private http:HttpClient) {}

  //Metodo para cargar lista de educaciones.
  public listarEducaciones(){
    //return this.http.get(`${baseUrl}/educacion/`);
    return this.http.get(this.baseUrl + 'educacion/');
  }
  //Metodo para agregar educacion.
  public agregarEducacion(educacion:any){
    //return this.http.post(`${baseUrl}/educacion/`, educacion);
    return this.http.post(this.baseUrl + 'educacion/', educacion);
  }
  //Metodo para actualizar Experiencia
  public actualizarEducacion(educacion:any){
    //return this.http.put(`${baseUrl}/educacion/`,educacion);
    return this.http.put(this.baseUrl + 'educacion/',educacion);
  }
  //Metodo para obtener o buscar Educacion por id.
  public obtenerEducacionPorId(educacionId:any){
    //return this.http.get(`${baseUrl}/educacion/${educacionId}`);
    return this.http.get(this.baseUrl + `educacion/${educacionId}`);
  }
  //Metodo para eliminar educacion.    
  public eliminarEducacion(educacionId:any){
    //return this.http.delete(`${baseUrl}/educacion/${educacionId}`);
    return this.http.delete(this.baseUrl + `educacion/${educacionId}`);
  }
}
