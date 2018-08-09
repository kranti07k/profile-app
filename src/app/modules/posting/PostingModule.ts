import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostjobComponent } from './components/postjob/postjob.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: PostjobComponent}
    ])
  ],
  declarations: [PostjobComponent],
  exports: []
})
export class PostingModule {
}