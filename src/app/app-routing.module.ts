import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';


const routes: Routes = [
  { path: 'peliculas', component: MoviesComponent },
  { path: 'actores', component: ActorsComponent },
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
