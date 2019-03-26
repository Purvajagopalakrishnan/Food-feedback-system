import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ViewRatingComponent } from './components/view-rating/view-rating.component';
import { ViewCommentsComponent } from './components/view-comments/view-comments.component';
import { ViewCommentsGuard } from './guards/view-comments.guard';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addfeedback', component:FeedbackComponent, canActivate: [AuthGuard]},
  {path: 'rating', component: ViewRatingComponent, canActivate: [AuthGuard]},
  {path: 'error', component: ErrorComponent},
  {path:'viewcomments',component: ViewCommentsComponent, canActivate: [ViewCommentsGuard,AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
