import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreosoulComponent } from './creosoul.component';

describe('CreosoulComponent', () => {
  let component: CreosoulComponent;
  let fixture: ComponentFixture<CreosoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreosoulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreosoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
