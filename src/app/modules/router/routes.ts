import { Routes } from '@angular/router';

import { ContactComponent } from '../../components/contact/contact.component'
import { TechskillsComponent } from '../../components/techskills/techskills.component'
import { HomeComponent } from '../../components/home/home.component'
import { TechSkillResolver } from '../../components/resolvers/techskillsResolver';
import { PostJobActivator } from '../../authguards/postjobguard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: TechskillsComponent, resolve: { skillsData: TechSkillResolver }  },
    { path: 'postjob', canActivate: [PostJobActivator],  loadChildren:'../../modules/posting/posting.module#PostingModule'},
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ContactComponent }
];