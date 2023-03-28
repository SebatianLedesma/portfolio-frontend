import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skill = {
    nombre: '',
    porcentaje: '',    
  }

  constructor(private skillService: SkillService, private router: Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  } 
  
  formSubmit(){
    if(this.skill.nombre.trim() == '' || this.skill.nombre == null){
      this.snack.open("El nombre es requerido!",'',{
        duration:3000
      })
      return ; 
    }
    if(this.skill.porcentaje.trim() == '' || this.skill.porcentaje == null){
      this.snack.open("El porcentaje es requerido!",'',{
        duration:3000
      })
      return ; 
    }

    this.skillService.agregarSkill(this.skill).subscribe(
      (dato:any) => {
        Swal.fire('Skill agregada','La skill se guardó con exito','success');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!','Error al guardar la skill', 'error')
      }
    )
  }


}
