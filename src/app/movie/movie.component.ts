import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { IMovie } from '../model/movie';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: IMovie;
  public numberComments: number;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private commentsService: CommentsService
  ) {
    this.commentsService.currentNumberComments.subscribe(numComment => {
      this.numberComments = numComment;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.moviesService.getMovie(id).subscribe((movie: IMovie) => {
        this.movie = movie;
      });
    });
  }

}
