import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'vote',
    loadChildren: () => import('./views/voting/voting.module').then(m => m.VotingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
