import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntreComponent } from './intre.component';

describe('IntreComponent', () => {
  let component: IntreComponent;
  let fixture: ComponentFixture<IntreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
