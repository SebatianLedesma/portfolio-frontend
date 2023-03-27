import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  educacion = {
    institucion: '',
    titulo: '',
    carrera: '',
    inicio: '',
    fin: '',
    imagen: '',
    puntaje: '',
  }

  constructor(private educacionService: EducacionService, private router: Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  } 
  
  formSubmit(){
    if(this.educacion.institucion.trim() == ' ' || this.educacion.institucion == null){
      this.snack.open("La institucion es requerida!",'',{
        duration:3000
      })
      return ; 
    }

    this.educacionService.agregarEducacion(this.educacion).subscribe(
      (dato:any) => {
        Swal.fire('Categoria agregada','La educacion se guardó con exito','success');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!','Error al guardar la educacion', 'error')
      }
    )
  }

}
