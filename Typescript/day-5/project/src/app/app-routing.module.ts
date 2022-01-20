import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",redirectTo:"about",pathMatch:'full'},
  {path:"users",component:UserComponent,canActivate:[AuthGuard]},
  {path:"about",component:AboutusComponent,},
  {path:"logIn",component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:"register",component:RegistrationComponent},
  {path:"contact",component:ContactusComponent},
  {path:"**",component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
