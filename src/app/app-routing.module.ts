import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: NavbarComponent,
        // canActivate: [AuthGuard]
      },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      //   children: [
      //     {
      //       path: 'manage-student',
      //       component: ManageStudentComponent,
      //     },
      //     {
      //       path: 'add-student',
      //       component: AddStudentComponent,
      //     },
      //   ],
      // },
    ],
  },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
