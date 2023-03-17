import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) {}

  public listarEducaciones(){
    return this.http.get(`${baserUrl}/educacion/`);
  }
}
