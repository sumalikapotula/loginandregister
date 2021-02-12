import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmntoolbarComponent } from './cmntoolbar.component';

describe('CmntoolbarComponent', () => {
  let component: CmntoolbarComponent;
  let fixture: ComponentFixture<CmntoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmntoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmntoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
