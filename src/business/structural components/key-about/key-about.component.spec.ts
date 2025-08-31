import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAboutComponent } from './key-about.component';

describe('KeyAboutComponent', () => {
  let component: KeyAboutComponent;
  let fixture: ComponentFixture<KeyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
