import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-educaciones',
  templateUrl: './view-educaciones.component.html',
  styleUrls: ['./view-educaciones.component.css']
})
export class ViewEducacionesComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;  

  educaciones:any=[
  ]

  constructor(private educacionService:EducacionService, public login:LoginService ) { 
    
  }

  ngOnInit(): void {
    this.educacionService.listarEducaciones().subscribe(
      (dato:any)=>{
        this.educaciones=dato;
       console.log(this.educaciones);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!' , 'Error al cargar educacion', 'error');
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

  eliminarEducacion(educacionId:any){    
    this.educacionService.eliminarEducacion(educacionId).subscribe(
      (data) => {
        this.educaciones = this.educaciones.filter((educacion:any) => educacion.id != educacionId);
        Swal.fire('Educacion eliminada', 'La educacion ha sido eliminada con exito', 'success')
      },
      (error) => {
        Swal.fire('error', 'Error al eliminar la educacion', 'error');
      }
    )  
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
