import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { NewPostComponent } from './new-post/new-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './common/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    BrowserAnimationsModule,
    LMarkdownEditorModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
