import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { IMovie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: IMovie[];

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });
  }

  deleteMovie(movieId: string) {
    this.moviesService.deleteMovie(movieId).subscribe(response => {
      console.log(response);
      this.loadMovies();
    });
  }

}
