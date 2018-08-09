import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostjobComponent } from './components/postjob/postjob.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PostjobComponent }
    ])
  ],
  declarations: [PostjobComponent],
  exports: [

  ]
})
export class PostingModule { }
