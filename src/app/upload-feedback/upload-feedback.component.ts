import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, FeedbackService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-upload-feedback',
  templateUrl: './upload-feedback.component.html',
  styleUrls: ['./upload-feedback.component.less']
})
export class UploadFeedbackComponent implements OnInit {
  loading = false;
  uploadForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private feedbackService: FeedbackService
  ) {
    this.createForm();
  }

  createForm() {
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    this.loading = true;
    this.feedbackService.postFeedbacks( this.uploadForm.value)
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Feedback Added Successful', { keepAfterRouteChange: false });
            this.loading = false;
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

}
