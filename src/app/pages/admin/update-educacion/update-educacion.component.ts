import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-educacion',
  templateUrl: './update-educacion.component.html',
  styleUrls: ['./update-educacion.component.css']
})
export class UpdateEducacionComponent implements OnInit {

  educacionId:any = 0;
  educacion:any;
  id:number;


  constructor(
    private educacionService:EducacionService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.educacionId = this.route.snapshot.params['educacionId'];
    this.educacionService.obtenerEducacionPorId(this.educacionId)
    .subscribe(
      (dato: any) => {
        this.educacion = dato;
        console.log(this.educacion);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public actualizarDatosEducacion() {
    this.educacionService.actualizarEducacion(this.educacion).subscribe(
      (dato) => {
        Swal.fire(
          'Educacion actualizada',
          'La educación ha sido actualidada exitosamente',
          'success'
        ).then((e) => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        Swal.fire(
          'Error al actualizar',
          'La educación no ha sido actualizada correctamente',
          'error'
        );
        console.log(error);
      }
    );
  }

}
