import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl=environment.URL +'usuarios/';


    constructor(private httpClient: HttpClient) { }
   
    public listarUsuarios(){
      return this.httpClient.get(`${baserUrl}/usuarios/`);
    }
    public añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }

}
