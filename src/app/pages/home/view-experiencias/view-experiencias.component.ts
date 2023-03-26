import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Experiencia } from 'src/app/Models/Experiencia';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-experiencias',
  templateUrl: './view-experiencias.component.html',
  styleUrls: ['./view-experiencias.component.css']
})
export class ViewExperienciasComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;  

  experiencias:Experiencia[];

  constructor(private experienciaService:ExperienciaService, public login:LoginService, private router:Router) { 
    
  }

  ngOnInit(): void {
    
    this.experienciaService.obtenerListaDeExperiencias();
    
  

    this.experienciaService.listarExperiencias().subscribe(
      (dato:any)=>{
        this.experiencias=dato;
       console.log(this.experiencias);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!' , 'Error al cargar experiencia', 'error');
      }
    ),
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
  }

  actualizarExperiencia(id:number){
    this.router.navigate(['update-experiencia',id])
  }

  eliminarUsuario(id:number){
    this.experienciaService.eliminarUsuario(id).subscribe(dato=>{
      this.experienciaService.eliminarUsuario(id);
    });
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
