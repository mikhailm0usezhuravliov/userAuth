import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
export class UserRoutingModule {}
