import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewBookComponent } from './quick-view-book.component';

describe('QuickViewBookComponent', () => {
  let component: QuickViewBookComponent;
  let fixture: ComponentFixture<QuickViewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickViewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
