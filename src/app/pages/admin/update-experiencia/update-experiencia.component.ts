import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/Models/Experiencia';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-experiencia',
  templateUrl: './update-experiencia.component.html',
  styleUrls: ['./update-experiencia.component.css']
})
export class UpdateExperienciaComponent implements OnInit {

  id:number;
  experiencia:Experiencia= new Experiencia();

  constructor(private experienciaService:ExperienciaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    });
  }

  irALaListaDeExperiencias(){
    this.router.navigate(['/experiencias']);
    alert(`La empresa ${this.experiencia.empresa} ha sido actualizada con exito`);
    
  }

  onSubmit(){
    this.experienciaService.actualizarExperiencia(this.id,this.experiencia).subscribe(dato => {
      this.irALaListaDeExperiencias();
    });
  }

}
