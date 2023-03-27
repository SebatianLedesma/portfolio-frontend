import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../Models/Skill';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }
  
  public listarSkills(){
    return this.http.get(`${baseUrl}/skill/`);
  }  

  public detalleSkill(skillId:number):Observable<Skill>{
    return  this.http.delete<Skill>(`${baseUrl}/skill/${skillId}`);  
  }

  public agregarSkill(skill:any){
    return this.http.post(`${baseUrl}/skill/`, skill);
  }

  public actualizarSkill(skillId:number, skill:Skill) : Observable<Object>{
    return this.http.put(`${baseUrl}/${skillId}`,skill);
  }
 
  public obtenerSkillPorId(skillId:number) : Observable<Skill>{
    return this.http.get<Skill>(`${baseUrl}/${skillId}`);
  }
      
  public eliminarSkill(skillId:any){
    return this.http.delete(`${baseUrl}/skill/${skillId}`);
  }
}
