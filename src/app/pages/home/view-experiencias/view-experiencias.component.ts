import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-experiencias',
  templateUrl: './view-experiencias.component.html',
  styleUrls: ['./view-experiencias.component.css']
})
export class ViewExperienciasComponent implements OnInit {

  experiencias:any=[
  ]

  constructor(private experienciaService:ExperienciaService ) { 
    
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
    )
  }

}
