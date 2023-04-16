import { Component } from '@angular/core';
;

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  pagename = "Student List"
  records = [
    {"id":1,  "name" : "Suraj", "RollNum" : 1001},
    {"id":2, "name" : "Niraj","RollNum" : 1002},
    {"id":3, "name" : "Kamal" ,"RollNum" : 1003}
]

studentname=true

colorclass= "color-green"

imageAttr = "alt from component file"
}
