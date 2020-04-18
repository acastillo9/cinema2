import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('/assets/data/movies.json');
  }
}
