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
    path: 'add-experiencia',
    component: AddExperienciaComponent
  },
  {
    path: 'update-experiencia',
    component: UpdateExperienciaComponent

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
        path:'experiencias',
        component:ViewExperienciasComponent
      },
      {
        path: 'add-experiencia',
        component: AddExperienciaComponent
      },
      {
        path: 'update-experiencia',
       component: UpdateExperienciaComponent
      }
    ]
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
    children:[
      {
        path:'experiencias',
        component:ViewExperienciasComponent
      },
      {
        path: 'add-experiencia',
        component: AddExperienciaComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
  {
    path:'proyectos',
    component:ViewProyectosComponent
  },
  {
    path:'educaciones',
    component:ViewEducacionesComponent
  },
  {
    path:'skills',
    component:ViewSkillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
