import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-view-experiencias',
  templateUrl: './view-experiencias.component.html',
  styleUrls: ['./view-experiencias.component.css']
})
export class ViewExperienciasComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;  

  experiencias:any=[     
  ];

  constructor(private experienciaService:ExperienciaService, public login:LoginService, private router:Router) { 
    
  }

  ngOnInit(): void {      

    this.cargarExperiencia();

    this.experienciaService.listarExperiencias().subscribe(
      (dato:any)=>{
        this.experiencias = dato;
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

  cargarExperiencia(): void{
    this.experienciaService.listarExperiencias().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  eliminarExperiencia(experienciaId:any){    
    this.experienciaService.eliminarExperiencia(experienciaId).subscribe(
      (data) => {
        this.experiencias = this.experiencias.filter((experiencia:any) => experiencia.id != experienciaId);
        Swal.fire('Experiencia eliminada', 'La experiencia ha sido eliminada con exito', 'success')
      },
      (error) => {
        Swal.fire('error', 'Error al eliminar la experiencia', 'error');
      }
    )  
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

  actualizarExperiencia(id:number){
    this.router.navigate(['update-experiencia',id])
  }
  agregarExperiencia(){
    this.router.navigate(['/add-experiencia/'])
  }
}
