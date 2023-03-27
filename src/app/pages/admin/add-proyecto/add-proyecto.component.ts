import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  proyecto = {
    nombre: '',
    descripcion: '',
    url: '',
  }

  constructor(private proyectoService: ProyectoService, private router: Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  } 
  
  formSubmit(){
    if(this.proyecto.nombre.trim() == ' ' || this.proyecto.nombre == null){
      this.snack.open("El nombre es requerido!",'',{
        duration:3000
      })
      return ; 
    }

    this.proyectoService.agregarProyecto(this.proyecto).subscribe(
      (dato:any) => {
        Swal.fire('Proyecto agregado','El proyecto se guardó con exito','success');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!','Error al guardar el proyecto', 'error')
      }
    )
  }

}