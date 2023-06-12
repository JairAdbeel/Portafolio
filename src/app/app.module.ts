import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { ItemsComponent } from './components/items/items.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FreeComponent } from './components/free/free.component';
import { StaticComponent } from './components/static/static.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ItemsComponent,
    WelcomeComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    FreeComponent,
    StaticComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
