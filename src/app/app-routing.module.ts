import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { AuthComponent } from './auth/auth.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';


const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'post/:title', component: ViewPostComponent },
  { path: 'all-posts', component: AllPostsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
