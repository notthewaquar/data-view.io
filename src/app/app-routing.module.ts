import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSourcesComponent } from './data-sources/data-sources.component';
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
        component: DashboardComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'data-sources',
        component: DataSourcesComponent
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
