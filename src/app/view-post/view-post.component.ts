import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../API.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  /** Data of the given blog post */
  post: { title: string, content: string }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: APIService
  ) { }

  async ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title').trim().replace(/-/g, ' ');

    !title && this.router.navigateByUrl('/all-posts');
    
    let posts = await this.api.ListPosts({ title: { eq: title } });
    !posts || !posts.items.length && this.router.navigateByUrl('/all-posts');
    this.post = posts.items.map(({title,content,author,description}) => ({title,content,author,description}))[0];
  }

}
