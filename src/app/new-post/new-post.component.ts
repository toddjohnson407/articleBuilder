import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  /** Form for new posts */
  newPostForm: FormGroup;

  /** Previous editor content */
  prevContent: any = "Test"

  @ViewChild('editor', {static:false}) editor: any;

  constructor(
    private fb: FormBuilder,
    private api: APIService
  ) {
    this.newPostForm = this.fb.group({
      title: [''],
      content: ['']
    })
  }

  async ngOnInit() {
    let posts = await this.api.ListPosts();
    this.doUpload = this.doUpload.bind(this);
    console.log(this.editor);
  }

  doUpload(files: Array<File>): any {
    // let test = Promise.resolve([{ name: 'xxx', url: 'xxx.png', isImg: true }]);
    return Promise.resolve([{ name: 'xxx', url: 'xxx.png', isImg: true }]);
  }

  /** Sends an api request to create a new post */
  createNewPost(): void  {
    let postData = { title: this.newPostForm.get('title').value, content: this.newPostForm.get('content').value };
    console.log(postData);
    this.api.CreatePost(postData).then(post => console.log('New Post Successful:', post));
  }

}
