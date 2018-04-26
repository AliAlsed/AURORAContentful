import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { Router } from '@angular/router';
import { ContentFulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    CourseListComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ContentFulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
