import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit {

  proyectoId:any = 0;
  proyecto:any;
  id:number;

  constructor(
    private proyectoService:ProyectoService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.proyectoId = this.route.snapshot.params['proyectoId'];
    this.proyectoService.obtenerProyectoPorId(this.proyectoId)
    .subscribe(
      (dato: any) => {
        this.proyecto = dato;
        console.log(this.proyecto);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public actualizarDatosProyecto() {
    this.proyectoService.actualizarProyecto(this.proyecto).subscribe(
      (dato) => {
        Swal.fire(
          'Proyecto actualizado',
          'El proyecto ha sido actualidado exitosamente',
          'success'
        ).then((e) => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        Swal.fire(
          'Error al actualizar',
          'El proyecto no ha sido actualizado correctamente',
          'error'
        );
        console.log(error);
      }
    );
  }
}
