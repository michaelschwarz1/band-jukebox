import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenueComponent } from './app-menue.component';

describe('AppMenueComponent', () => {
  let component: AppMenueComponent;
  let fixture: ComponentFixture<AppMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
