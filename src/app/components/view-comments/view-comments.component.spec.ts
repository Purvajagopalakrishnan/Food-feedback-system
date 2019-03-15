import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ViewCommentsComponent } from './view-comments.component';
import { ViewCommentsService } from 'src/app/services/view-comments.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

fdescribe('ViewCommentsComponent', () => {
  let component: ViewCommentsComponent;
  let fixture: ComponentFixture<ViewCommentsComponent>;
  let service: ViewCommentsService;
  let viewCommentsSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommentsComponent ],
      imports: [HttpClientModule,RouterTestingModule],
      providers: [
        {
          provide: ViewCommentsService,
          useValue: jasmine.createSpyObj('ViewCommentsService',['GetFeedbackDetails'])
        }
      ]
    })
    .compileComponents();
    service = TestBed.get(ViewCommentsService);
    viewCommentsSpy = TestBed.get(ViewCommentsService).GetFeedbackDetails;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommentsComponent);
    component = fixture.componentInstance;
  });

  it('should create', (() => {
    const testData = ['dinner',3];
    viewCommentsSpy.and.returnValue(of(testData));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
  it('should return observable of view comments', () => {
    const testData = ['dinner',3];
    viewCommentsSpy.and.returnValue(of(testData));
    service.GetFeedbackDetails().subscribe(
      (x) => {
        expect(x).toBe(testData);
      }
    )
  });
});
