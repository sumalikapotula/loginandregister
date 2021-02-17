import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontoolbarComponent } from './commontoolbar.component';

describe('CommontoolbarComponent', () => {
  let component:  CommontoolbarComponent;
  let fixture: ComponentFixture< CommontoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  CommontoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( CommontoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
