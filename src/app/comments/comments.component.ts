import { Component, OnInit } from '@angular/core';
import { IComment } from '../model/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments: IComment[];
  public commentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService
  ) {
    this.comments = [
      {name: 'Andrés', comment: 'Me encanta esta pelicula!'},
      {name: 'Diana', comment: 'No me gusta'},
      {name: 'Juana', comment: 'No la conozco'}
    ];

    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this.commentsService.sendComments(this.comments.length);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const comment: IComment = {name: this.commentForm.value.name, comment: this.commentForm.value.comment};
    this.comments.push(comment);
    this.commentsService.sendComments(this.comments.length);
    this.commentForm.reset();
  }

}
