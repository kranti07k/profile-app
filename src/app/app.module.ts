import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router'

import { AppRoutingModule } from './modules/router/approuting.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechskillsComponent } from './components/techskills/techskills.component';
import { HomeComponent } from './components/home/home.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { PostJobActivator } from './authguards/postjobguard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    ContactComponent,
    TechskillsComponent,
    HomeComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PostJobActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
