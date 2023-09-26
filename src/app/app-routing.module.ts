import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =[
  { path: '',  pathMatch: 'full', component:HomeComponent },
  //  { path: 'home',          component: HomeComponent },
  //  { path: 'home/:guestId',          component: HomeComponent },
  //  { path: ':guestId',          component: HomeComponent },
  // { path: 'component',       component: ComponentsComponent },
  // { path: 'user-profile',     component: ProfileComponent },
  // { path: 'signup',           component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
