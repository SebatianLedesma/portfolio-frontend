import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../Models/Skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

 baseUrl=environment.URL;

  constructor(private http:HttpClient) { }
  
  //Metodo para cargar lista de skills.
  public listarSkills(){
    return this.http.get(this.baseUrl +`skill/`);
  } 
  //Metodo para agregar skill.
  public agregarSkill(skill:any){
    return this.http.post(this.baseUrl +`skill/`, skill);
  }
  //Metodo para actualizar skill
  public actualizarSkill(skill:any){
    return this.http.put(this.baseUrl +`skill/`,skill);
  }
  //Metodo para obtener Skill por id.
  public obtenerSkillPorId(skillId:any){
    return this.http.get(this.baseUrl + `skill/${skillId}`);
  }
   //Metodo para eliminar skill.   
  public eliminarSkill(skillId:any){
    return this.http.delete(this.baseUrl + `skill/${skillId}`);
  }
}
