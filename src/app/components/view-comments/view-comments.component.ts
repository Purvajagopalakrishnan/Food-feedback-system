import { Component, OnInit } from '@angular/core';
import { ViewCommentsService } from 'src/app/services/view-comments.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
  getFeedback: any; 
  constructor(private viewCommentsService: ViewCommentsService, private localStorageService: LocalStorageService,private router: Router) { }

  ngOnInit() {
    this.viewCommentsService.GetFeedbackDetails().subscribe(
       employeeFeedback => {
        this.getFeedback = employeeFeedback
      },
      error => {}
    )
  }
  onClickLogout() {
    this.localStorageService.removeItem('isAdmin');
    this.router.navigate(['/login']);
    this.localStorageService.removeItem('Email_id');
    this.localStorageService.removeItem('token');
  }
}
