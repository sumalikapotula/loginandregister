import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegetoolbarComponent } from './collegetoolbar.component';

describe('ClgtoolbarComponent', () => {
  let component: CollegetoolbarComponent;
  let fixture: ComponentFixture<CollegetoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegetoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegetoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
