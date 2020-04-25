import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private currentNumberCommentsSubject: BehaviorSubject<number>;
  public currentNumberComments: Observable<number>;
  private numberComments: number;

  constructor() {
    this.currentNumberCommentsSubject = new BehaviorSubject<number>(0);
    this.currentNumberComments = this.currentNumberCommentsSubject.asObservable();
    this.numberComments = 0;
  }

  public sendComments(numeroComentarios: number) {
    this.numberComments = numeroComentarios;
    this.currentNumberCommentsSubject.next(numeroComentarios);
  }
}
