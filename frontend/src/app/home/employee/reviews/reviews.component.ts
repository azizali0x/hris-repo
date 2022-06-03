import { Component, OnInit } from '@angular/core';
import { GetinfoService } from 'src/app/core/services/getinfo.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(
    private getInfo: GetinfoService
  ) { }

  reviews: string[] = []

  ngOnInit(): void {
    this.getInfo.getReviews().subscribe((data: any)=>{

    })
  }

}
