import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { SongsOverviewPageComponent } from './pages/songs-overview-page/songs-overview-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'event',
    component: EventPageComponent
  },
  {
    path: 'vote',
  component: SongsOverviewPageComponent
  },
  {
    path: 'results',
  component: ResultsPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
  // { path: 'home', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
