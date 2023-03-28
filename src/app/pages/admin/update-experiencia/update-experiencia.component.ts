import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatCardXlImage } from '@angular/material/card';

@Component({
  selector: 'app-update-experiencia',
  templateUrl: './update-experiencia.component.html',
  styleUrls: ['./update-experiencia.component.css'],
})
export class UpdateExperienciaComponent implements OnInit {
  experienciaId: any = 0;
  experiencia: any;
  id: number;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.experienciaId = this.route.snapshot.params['experienciaId'];
    this.experienciaService
      .obtenerExperienciaPorId(this.experienciaId)
      .subscribe(
        (dato: any) => {
          this.experiencia = dato;
          console.log(this.experiencia);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public actualizarDatosExperiencia() {
    this.experienciaService.actualizarExperiencia(this.experiencia).subscribe(
      (dato) => {
        Swal.fire(
          'Experiencia actualizada',
          'La experiencia ha sido actualidada exitosamente',
          'success'
        ).then(
          (e) => {
          this.router.navigate(['/experiencias']);
        }
        );
      },
      (error) => {
        Swal.fire(
          'Error al actualizar',
          'La experiencia no ha sido actualizada correctamente',
          'error'
        );
        console.log(error);
      }
    );
  }
}
