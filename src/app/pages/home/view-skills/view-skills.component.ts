import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.css']
})
export class ViewSkillsComponent implements OnInit {

  isLoggedIn = false;
  user:any = null; 
   

  skills:any=[
  ]

  constructor(private skillService:SkillService, public login:LoginService ) { 
    
  }

  ngOnInit(): void {
    this.skillService.listarSkills().subscribe(
      (dato:any)=>{
        this.skills=dato;
       console.log(this.skills);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!' , 'Error al cargar skill', 'error');
      }
    ),
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
  }
  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
