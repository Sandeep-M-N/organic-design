import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallmarkComponent } from './hallmark.component';

describe('HallmarkComponent', () => {
  let component: HallmarkComponent;
  let fixture: ComponentFixture<HallmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HallmarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
