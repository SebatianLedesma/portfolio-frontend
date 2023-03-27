import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Models/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:Experiencia[]= [];

  constructor(private experienciaService:ExperienciaService, public login:LoginService) { }

  isLoggedIn = false;
  user:any = null;  

  ngOnInit(): void {
  }

}
