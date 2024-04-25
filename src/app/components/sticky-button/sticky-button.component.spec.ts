import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyButtonComponent } from './sticky-button.component';

describe('StickyButtonComponent', () => {
  let component: StickyButtonComponent;
  let fixture: ComponentFixture<StickyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
