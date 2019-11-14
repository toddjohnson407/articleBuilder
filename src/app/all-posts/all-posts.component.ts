import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  /** Array of all Posts */
  allPostsContent: Array<any>;

  constructor(
    private api: APIService,
    private router: Router
  ) { }

  async ngOnInit() {
    let posts = await this.api.ListPosts();
    this.allPostsContent = posts.items.map(({title, content, author, description}) => ({ title, content, author, description }));
  }

  /** Navigates to the selected post page */
  viewPost(title: string) {
    title && this.router.navigateByUrl(`/post/${title.trim().replace(/\s+/g, '-')}`);
  }

}
