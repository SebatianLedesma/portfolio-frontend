import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //baseUrl=environment.URL + 'educacion/';

  constructor(private http:HttpClient) {}

  //Metodo para cargar lista de educaciones.
  public listarEducaciones(){
    return this.http.get(`${baseUrl}/educacion/`);
  }
  //Metodo para agregar educacion.
  public agregarEducacion(educacion:any){
    return this.http.post(`${baseUrl}/educacion/`, educacion);
  }
  //Metodo para actualizar Experiencia
  public actualizarEducacion(educacion:any){
    return this.http.put(`${baseUrl}/educacion/`,educacion);
  }
  //Metodo para obtener o buscar Educacion por id.
  public obtenerEducacionPorId(educacionId:any){
    return this.http.get(`${baseUrl}/educacion/${educacionId}`);
  }
  //Metodo para eliminar educacion.    
  public eliminarEducacion(educacionId:any){
    return this.http.delete(`${baseUrl}/educacion/${educacionId}`);
  }
}
