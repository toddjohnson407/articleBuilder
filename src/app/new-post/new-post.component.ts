import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { APIService } from '../API.service';

import { NewPost } from './new-post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  // /** FormControl for the text editor (article content) */
  // editorControl: FormControl;
  // /** FormControl for the article title */
  // title: FormControl;

  /** FormControl for the display format of md-editor */
  displayControl: FormControl;
  /** Options for the display format of md-editor */
  dispOpts: Object = {
    showPreviewPanel: true
  }

  /** FormGroup for new post fields */
  newPost: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: APIService
  ) {
    // this.editorControl = new FormControl('');
    // this.title = new FormControl('');
    this.displayControl = new FormControl();

    this.newPost = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  /** Sends an api request to create a new post */
  createNewPost(): void  {
    let postData: any = Object.entries(this.newPost.controls).reduce((acc, [key, {value}]) => {
      acc[key] = value;
      return acc;
    },{});
    this.api.CreatePost(postData).then(post => console.log('New Post Successful:', post)).catch(err => console.error('Error creating post:', err));
  }

  // Getters for newPost FormControls
  get title() { return this.newPost.get('title') }
  get description() { return this.newPost.get('description') }
  get author() { return this.newPost.get('author') }
  get content() { return this.newPost.get('content') }

}

// ### A Brief Overview
// The map function is used to create a changed, or mutated, version of an existing array.

// Below is an example of how to retrieve certain attributes from an array of objects.

// ```typescript
// let people = [
//   { name: 'John', age: 23 }
//   { name: 'Suzy', age: 35 }
// ]

// let names = people.map(person => person.name);

// // Output: ['John', 'Suzy']

// ```

// ### Using Destructuring
// We can use destructuring to simplify our map function.

// ```typescript
// let people = [
//   { name: 'John', age: 23, city: 'Madrid' }
//   { name: 'Suzy', age: 35, city: 'Chicago' }
// ]

// // Because 'name' is a key in all of these objects we
// // can directly access the 'name' value
// let names = people.map(({name}) => name);

// ```
// ### Conclusion
// The map function is really useful.