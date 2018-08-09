import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router} from '@angular/router';
import { appRoutes } from './routes'
import { TechSkillResolver } from '../../components/resolvers/techskillsResolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [

  ],
  providers:[
    TechSkillResolver
  ]
})
export class AppRoutingModule { }
