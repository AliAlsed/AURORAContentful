import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../environments/environment';

@Injectable()
export class ContentFulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
   });
// tslint:disable-next-line:one-line
constructor(){
}

getCourses(query?: object): Promise<Entry<any>[]> {
return this.client.getEntries(Object.assign({
  content_type: 'tutorial'
}, query)).then(res => res.items);
}
getCourse(courseId): Promise<Entry<any>> {
  return this.client.getEntries(Object.assign({
    content_type: 'tutorial'
  }, {'sys.id': courseId})).then(res => res.items[0] );
}
}
