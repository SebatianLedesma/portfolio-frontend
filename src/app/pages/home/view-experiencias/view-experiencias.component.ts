import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-view-experiencias',
  templateUrl: './view-experiencias.component.html',
  styleUrls: ['./view-experiencias.component.css']
})
export class ViewExperienciasComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;  

  experiencias:any=[
  ]

  constructor(private experienciaService:ExperienciaService, public login:LoginService ) { 
    
  }

  ngOnInit(): void {
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
  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
