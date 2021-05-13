import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '@app/_services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  feedbacks : any;

  constructor(
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  getAllFeedbacks(){
    this.feedbackService.getFeedbacks().subscribe( feedbacks => {
      this.feedbacks = feedbacks;
      console.log(this.feedbacks);

    });
  }

}
