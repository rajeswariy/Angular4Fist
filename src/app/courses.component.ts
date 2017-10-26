
import { CoursesService } from './courses.service';
import { Component } from '@angular/core' ;
@Component({
  selector:'courses',
  //template:'<h2>Courses</h2>'
  // template:'<h2>{{title}}</h2>'
 // template:'<h2>{{getTitle()}}</h2>'
  template:`
<h2>{{getTitle()}}</h2>
<ul>
 <li *ngFor="let course of courses">
{{course}}
</li>
</ul>
`
})
export class CoursesComponent{
  title="list of courses";
 //courses=["course1","course2","course3"];
 // we need to call http end point 
  //1)logic tightly coupled with http endpoint
  //this cause unit testing of this it will be depend on http service
  //2)if other pages also want to print the same courses,we need to repeat this 
   //service calling logic multiple places
  //3)this component should not include any logic other than presentation logic.
  courses;
//  constructor(){
//    let service=new CoursesService();//tightly coupled
//    this.courses=service.getCourses();
//  }
     constructor(service: CoursesService){
//    //let service=new CoursesService();//tightly coupled
   this.courses=service.getCourses();
 }
 getTitle(){
    return this.title;
  }
  
}
