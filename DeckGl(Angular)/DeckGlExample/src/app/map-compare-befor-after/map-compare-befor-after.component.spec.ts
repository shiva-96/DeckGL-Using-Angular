import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCompareBeforAfterComponent } from './map-compare-befor-after.component';

describe('MapCompareBeforAfterComponent', () => {
  let component: MapCompareBeforAfterComponent;
  let fixture: ComponentFixture<MapCompareBeforAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCompareBeforAfterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCompareBeforAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
