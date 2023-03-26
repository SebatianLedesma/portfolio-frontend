import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class UserService {


    constructor(private httpClient: HttpClient) { }
   
    public listarUsuarios(){
      return this.httpClient.get(`${baserUrl}/usuarios/`);
    }
    public añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }

}
