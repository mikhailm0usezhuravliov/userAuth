import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: AuthPageComponent,
  },
  // {
  //   path: 'inbox',
  //   component: InboxComponent
  // },
  // {
  //   path: 'outbox',
  //   component: OutboxComponent
  // },
  // {
  //   path: 'cart',
  //   component: CartComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
