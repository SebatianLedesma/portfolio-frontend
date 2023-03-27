import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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

  constructor(private proyectoService:ProyectoService, public login:LoginService, private router:Router ) { 
    
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

  eliminarProyecto(proyectoId:any){    
    this.proyectoService.eliminarProyecto(proyectoId).subscribe(
      (data) => {
        this.proyectos = this.proyectos.filter((proyecto:any) => proyecto.id != proyectoId);
        Swal.fire('Proyecto eliminado', 'El proyecto ha sido eliminado con exito', 'success')
      },
      (error) => {
        Swal.fire('error', 'Error al eliminar el proyecto', 'error');
      }
    )  
  }


  public logout(){
    this.login.logout();
    window.location.reload();
  }

  actualizarProyecto(id:number){
    this.router.navigate(['update-proyecto',id])
  }
  agregarProyecto(){
    this.router.navigate(['/add-proyecto'])
  }

}
