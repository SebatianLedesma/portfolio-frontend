import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl=environment.URL;


    constructor(private httpClient: HttpClient) { }
   
    public listarUsuarios(){
      return this.httpClient.get(this.baseUrl + `usuarios/`);
    }
    public añadirUsuario(user:any){
      return this.httpClient.post(this.baseUrl + `usuarios/`,user);
    }

}
