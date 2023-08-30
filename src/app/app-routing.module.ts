import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  {path: "profesor", component: ProfesorComponent},
  {path: "registro", component: RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
