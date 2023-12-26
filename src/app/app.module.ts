import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ContactComponent } from './contact/contact.component';
import { VisibleAnimationDirective } from './visible-animation.directive';
import { SecondProjectComponent } from './second-project/second-project.component';
import { FirstProjectComponent } from './first-project/first-project.component';
import { FirstProjectFdivComponent } from './first-project-fdiv/first-project-fdiv.component';
import { FirstProjectSdivComponent } from './first-project-sdiv/first-project-sdiv.component';
import { SecondProjectFdivComponent } from './second-project-fdiv/second-project-fdiv.component';
import { SecondProjectSdivComponent } from './second-project-sdiv/second-project-sdiv.component';
import { AboutFirstColComponent } from './about-first-col/about-first-col.component';
import { AboutSecondColComponent } from './about-second-col/about-second-col.component';
import { TextScrambleComponent } from './text-scramble/text-scramble.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: CurrentProjectsComponent },
  { path: 'contact', component: ContactComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    AboutComponent,
    SkillsComponent,
    CurrentProjectsComponent,
    VisibleAnimationDirective,
    SecondProjectComponent,
    FirstProjectComponent,
    FirstProjectFdivComponent,
    FirstProjectSdivComponent,
    SecondProjectFdivComponent,
    SecondProjectSdivComponent,
    AboutFirstColComponent,
    AboutSecondColComponent,
    TextScrambleComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ContactComponent,
    FontAwesomeModule,
    RouterModule.forRoot(routes)

  ],

  exports: [
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
