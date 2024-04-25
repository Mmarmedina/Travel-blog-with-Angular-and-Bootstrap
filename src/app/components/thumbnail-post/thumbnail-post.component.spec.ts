import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThumbnailPostComponent } from './thumbnail-post.component';

describe('ThumbnailPostComponent', () => {
  let component: ThumbnailPostComponent;
  let fixture: ComponentFixture<ThumbnailPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbnailPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbnailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
