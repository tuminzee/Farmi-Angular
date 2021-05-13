import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getFeedbacks(){
    return this.http.get(this.url+'/feedbacks/');
  }

  postFeedbacks(feedback){
    return this.http.post(this.url+'/feedbacks/', feedback);
  }


}
