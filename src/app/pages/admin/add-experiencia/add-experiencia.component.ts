import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {

  experiencia = {
    empresa: '',
    cargo: '',
    direccion: '',
    inicio: '',
    fin: '',
    imagen: '',
  }

  constructor(private experienciaService: ExperienciaService, private router: Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  } 
  
  formSubmit(){
    if(this.experiencia.empresa.trim() == ' ' || this.experiencia.empresa == null){
      this.snack.open("La empresa es requerida!",'',{
        duration:3000
      })
      return ; 
    }

    this.experienciaService.agregarExperiencia(this.experiencia).subscribe(
      (dato:any) => {
        Swal.fire('Categoria agregada','La experiencia se guardó con exito','success');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!','Error al guardar la experiencia', 'error')
      }
    )
  }
}
