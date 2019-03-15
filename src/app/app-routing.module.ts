import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ViewRatingComponent } from './components/view-rating/view-rating.component';
import { ViewCommentsComponent } from './components/view-comments/view-comments.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addfeedback', component:FeedbackComponent},
  {path: 'rating', component: ViewRatingComponent},
  {path:'viewcomments',component: ViewCommentsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
