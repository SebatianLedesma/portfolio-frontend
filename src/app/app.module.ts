import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AddEducacionComponent } from './pages/admin/add-educacion/add-educacion.component';
import { ViewProyectosComponent } from './pages/home/view-proyectos/view-proyectos.component';
import { ViewEducacionesComponent } from './pages/home/view-educacion/view-educaciones.component';
import { ViewSkillsComponent } from './pages/home/view-skills/view-skills.component';
import { ViewExperienciasComponent } from './pages/home/view-experiencias/view-experiencias.component';
import { AddProyectoComponent } from './pages/admin/add-proyecto/add-proyecto.component';
import { AddExperienciaComponent } from './pages/admin/add-experiencia/add-experiencia.component';
import { AddSkillComponent } from './pages/admin/add-skill/add-skill.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule, MatGridTile, MatGridTileText} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,    
    AddEducacionComponent,
    ViewProyectosComponent,
    ViewEducacionesComponent,
    ViewSkillsComponent,
    ViewExperienciasComponent,
    AddProyectoComponent,
    AddExperienciaComponent,
    AddSkillComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
