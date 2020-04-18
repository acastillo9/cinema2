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
    this.moviesService.getAllMovies().subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });
  }

}
