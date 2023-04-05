import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProyectosComponent } from './pages/home/view-proyectos/view-proyectos.component';
import { ViewExperienciasComponent } from './pages/home/view-experiencias/view-experiencias.component';
import { ViewEducacionesComponent } from './pages/home/view-educacion/view-educaciones.component';
import { ViewSkillsComponent } from './pages/home/view-skills/view-skills.component';
import { AddExperienciaComponent } from './pages/admin/add-experiencia/add-experiencia.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateExperienciaComponent } from './pages/admin/update-experiencia/update-experiencia.component';
import { AddProyectoComponent } from './pages/admin/add-proyecto/add-proyecto.component';
import { AddSkillComponent } from './pages/admin/add-skill/add-skill.component';
import { AddEducacionComponent } from './pages/admin/add-educacion/add-educacion.component';
import { UpdateEducacionComponent } from './pages/admin/update-educacion/update-educacion.component';
import { UpdateSkillComponent } from './pages/admin/update-skill/update-skill.component';
import { UpdateProyectoComponent } from './pages/admin/update-proyecto/update-proyecto.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'educacion',
    component:ViewEducacionesComponent
  },
  {
    path:'experiencia',
    component:ViewExperienciasComponent
  },
  {
    path:'proyecto',
    component:ViewProyectosComponent
  },
  {
    path:'skill',
    component:ViewSkillsComponent
  },
  {
    path: 'add-experiencia',
    component: AddExperienciaComponent
  },
  {
    path: 'add-proyecto',
    component: AddProyectoComponent
  },
  {
    path: 'add-skill',
    component: AddSkillComponent
  },
  {
    path: 'add-educacion',
    component: AddEducacionComponent
  },
  {
    path: 'experiencia/:experienciaId',
    component: UpdateExperienciaComponent
  },
  {
    path: 'proyecto/:proyectoId',
    component: UpdateProyectoComponent
  },
  {
    path: 'educacion/:educacionId',
    component: UpdateEducacionComponent
  },
  {
    path: 'skill/:skillId',
    component: UpdateSkillComponent
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      }, 
      {
        path:'experiencia',
        component:ViewExperienciasComponent
      },
      {
        path:'proyectos',
        component:ViewProyectosComponent
      },  
      {
        path:'educacion',
        component:ViewEducacionesComponent
      },
      {
        path:'skill',
        component:ViewSkillsComponent
      },            

    ]
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
    children:[
      {
        path:'experiencia',
        component:ViewExperienciasComponent
      },
      {
        path:'educacion',
        component:ViewEducacionesComponent
      },
      {
        path:'proyecto',
        component:ViewProyectosComponent
      },
      {
        path:'skill',
        component:ViewSkillsComponent
      },
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
