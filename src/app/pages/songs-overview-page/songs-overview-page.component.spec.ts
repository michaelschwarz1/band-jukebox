import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsOverviewPageComponent } from './songs-overview-page.component';

describe('SongsOverviewComponent', () => {
  let component: SongsOverviewPageComponent;
  let fixture: ComponentFixture<SongsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
