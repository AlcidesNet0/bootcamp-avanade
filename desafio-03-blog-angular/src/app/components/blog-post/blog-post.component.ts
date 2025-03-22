import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.models';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  @Input() post!: Post;
}
