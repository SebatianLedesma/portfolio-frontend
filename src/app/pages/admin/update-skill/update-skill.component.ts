import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  skillId:any = 0;
  skill:any;
  id:number;

  constructor(
    private skillService:SkillService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.skillId = this.route.snapshot.params['skillId'];
    this.skillService.obtenerSkillPorId(this.skillId)
    .subscribe(
      (dato: any) => {
        this.skill = dato;
        console.log(this.skill);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public actualizarDatosSkill() {
    this.skillService.actualizarSkill(this.skill).subscribe(
      (dato) => {
        Swal.fire(
          'Skill actualizada',
          'La skill ha sido actualidada exitosamente',
          'success'
        ).then((e) => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        Swal.fire(
          'Error al actualizar',
          'La skill no ha sido actualizada correctamente',
          'error'
        );
        console.log(error);
      }
    );
  }

}
