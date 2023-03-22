import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-proyectos',
  templateUrl: './view-proyectos.component.html',
  styleUrls: ['./view-proyectos.component.css']
})
export class ViewProyectosComponent implements OnInit {


  isLoggedIn = false;
  user:any = null;  

  proyectos:any=[
  ]

  constructor(private proyectoService:ProyectoService, public login:LoginService ) { 
    
  }

  ngOnInit(): void {
    this.proyectoService.listarProyectos().subscribe(
      (dato:any)=>{
        this.proyectos=dato;
       console.log(this.proyectos);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!' , 'Error al cargar proyecto', 'error');
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
  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
