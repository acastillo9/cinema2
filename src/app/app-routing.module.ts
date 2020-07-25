import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { MovieComponent } from './movie/movie.component';
import { SaveMovieComponent } from './save-movie/save-movie.component';


const routes: Routes = [
  { path: 'peliculas', component: MoviesComponent },
  { path: 'peliculas/:id', component: MovieComponent },
  { path: 'crear-pelicula', component: SaveMovieComponent},
  { path: 'crear-pelicula/:id', component: SaveMovieComponent},
  { path: 'actores', component: ActorsComponent },
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
