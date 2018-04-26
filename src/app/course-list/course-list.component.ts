import { Component, OnInit } from '@angular/core';
import { ContentFulService } from '../contentful.service';
import { Entry} from 'contentful';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
   courses: Entry<any> [] = [];
  constructor( private contentful: ContentFulService) { }

  ngOnInit() {
    this.contentful.getCourses()
    .then(courses => this.courses = courses ).then(() => {
      console.log(this.courses);
    });
  }

}
