import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;  

  usuarios:any=[
  ]

  constructor(private userService:UserService, public login:LoginService ) { 
    
  }

  ngOnInit(){
  }
}
