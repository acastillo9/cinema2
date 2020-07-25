import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IResponse } from '../model/response';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMovies(): Observable<IMovie[]> {
    return this.http.get<string>(environment.baseUrl + '/movies').pipe(
      map(response => {
        const movies: any[] = JSON.parse(response);
        movies.map(movie => movie.id = movie._id.$oid);
        return movies;
      })
    );
  }

  public getMovie(id: string): Observable<IMovie> {
    return this.http.get<string>(environment.baseUrl + '/movies/' + id).pipe(
      map(response => {
        const movie: any = JSON.parse(response);
        movie.id = movie._id.$oid;
        return movie;
      })
    );
  }

  public saveMovie(movie: IMovie, movieId?: string): Observable<IResponse> {
    if (movieId) {
      return this.http.put<IResponse>(environment.baseUrl + '/movies/' + movieId, movie);
    }
    return this.http.post<IResponse>(environment.baseUrl + '/movies', movie);
  }

  public deleteMovie(id: string): Observable<string> {
    return this.http.delete<string>(environment.baseUrl + '/movies/' + id);
  }
}
