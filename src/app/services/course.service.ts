import { Injectable } from '@angular/core';
import { course } from '../course';

@Injectable()
export class CourseService {
  courses:course[];

  constructor() { 
    this.courses=[
      {
        image:"Angular-2.jpg",
        name:"Angular",
        price:25000,
        description:"UI Development Framework"
      },
      {
        image:"react.png",
        name:"React js",
        price:15000,
        description:"React UI Development Framework"
      },
      {
        image:"asp.net.jpg",
        name:"ASP.NET",
        price:9000,
        description:"Microsof Framework"
      },
      {
        image:"images (1).jpg",
        name:"JAVA",
        price:5000,
        description:"Java Language"
      },
      {
        image:"redhat.jpg",
        name:"Redhat",
        price:17000,
        description:"Enterprice grade linux OS"
      },
      {
        image:"sql.webp",
        name:"SQL",
        price:21000,
        description:"Standard Language for RDBMS"
      }
    ]
  }
  getCources():course[]{
    return this.courses;
  }

}
