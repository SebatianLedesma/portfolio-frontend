import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }
  
  public listarSkills(){
    return this.http.get(`${baserUrl}/skill/`);
  }
}
