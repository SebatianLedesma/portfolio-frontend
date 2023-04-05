import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../Models/Skill';
import baseUrl from './helper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

 baseUrl=environment.URL;

  constructor(private http:HttpClient) { }
  
  //Metodo para cargar lista de skills.
  public listarSkills(){
    return this.http.get(`${baseUrl}/skill/`);
  } 
  //Metodo para agregar skill.
  public agregarSkill(skill:any){
    return this.http.post(`${baseUrl}/skill/`, skill);
  }
  //Metodo para actualizar skill
  public actualizarSkill(skill:any){
    return this.http.put(`${baseUrl}/skill/`,skill);
  }
  //Metodo para obtener Skill por id.
  public obtenerSkillPorId(skillId:any){
    return this.http.get(`${baseUrl}/skill/${skillId}`);
  }
   //Metodo para eliminar skill.   
  public eliminarSkill(skillId:any){
    return this.http.delete(`${baseUrl}/skill/${skillId}`);
  }
}
