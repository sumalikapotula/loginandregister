import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgtoolbarComponent } from './clgtoolbar.component';

describe('ClgtoolbarComponent', () => {
  let component: ClgtoolbarComponent;
  let fixture: ComponentFixture<ClgtoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgtoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
