import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course={courseTitle:"",
courseDescription:"",
courseDate:"",
courseVenue:"",
courseDuration:"",
}
  constructor() { }

  ngOnInit(): void {
  }
AddCourse(){
  console.log(this.course);
  alert("Success");
}
}
