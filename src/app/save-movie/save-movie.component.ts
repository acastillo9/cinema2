import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.css']
})
export class SaveMovieComponent implements OnInit {

  movieForm = this.fb.group({
    title: ['', Validators.required],
    synopsis: [''],
    year: [''],
    rating: [''],
    duration: [''],
    image: [''],
    genres: this.fb.array([
      this.fb.control('')
    ]),
    actors: this.fb.array([
      this.fb.group({
        name: [''],
        character: ['']
      })
    ])
  });

  private movieId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  get genres() {
    return this.movieForm.get('genres') as FormArray;
  }

  get actors() {
    return this.movieForm.get('actors') as FormArray;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.moviesService.getMovie(params.id).subscribe(movie => {
          this.movieId = movie.id;
          this.genres.clear();
          movie.genres.forEach(() => this.addGenre());
          this.actors.clear();
          movie.actors.forEach(() => this.addActor());
          this.movieForm.patchValue(movie);
        });
      }
    });
  }

  addGenre() {
    this.genres.push(this.fb.control(''));
  }

  addActor() {
    this.actors.push(
      this.fb.group({
        name: [''],
        character: ['']
      })
    );
  }

  onSubmit() {
    this.moviesService.saveMovie(this.movieForm.value, this.movieId).subscribe(response => {
      console.log(response.mensaje);
      this.movieId = undefined;
      this.movieForm.reset();
      this.movieForm.setControl(
        'genres',
        this.fb.array([
          this.fb.control('')
        ])
      )
      this.movieForm.setControl(
        'actors',
        this.fb.array([
          this.fb.group({
            name: [''],
            character: ['']
          })
        ])
      )
    });
  }

}
