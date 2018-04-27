import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IReviews } from './reviews';

@Component({
  selector: 'pm-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.newreview.name);
  }

  @Input() reviews: IReviews[];

  newreview: IReviews = new IReviews

}
