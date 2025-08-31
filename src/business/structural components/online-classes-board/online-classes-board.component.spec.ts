import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassesBoardComponent } from './online-classes-board.component';

describe('OnlineClassesBoardComponent', () => {
  let component: OnlineClassesBoardComponent;
  let fixture: ComponentFixture<OnlineClassesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineClassesBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineClassesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
