import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeLibraryComponent } from './college-library.component';

describe('CollegeLibraryComponent', () => {
  let component: CollegeLibraryComponent;
  let fixture: ComponentFixture<CollegeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
