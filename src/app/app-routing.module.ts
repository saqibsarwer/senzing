import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'inquiry',
    loadChildren: () =>
      import('./modules/inquiry/inquiry.module').then((m) => m.InquiryModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./modules/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./modules/setting/setting.module').then((m) => m.SettingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
