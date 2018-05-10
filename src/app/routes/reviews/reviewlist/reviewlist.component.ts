import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';
import{review} from '../../../review';

@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {
  reviews;

  constructor(private rs:ReviewService) { 
    rs.getReview().subscribe(
      (data)=>this.reviews = data,
      (error)=>{alert("something went wrong");}
    );
  }

  ngOnInit() {
  }

}
