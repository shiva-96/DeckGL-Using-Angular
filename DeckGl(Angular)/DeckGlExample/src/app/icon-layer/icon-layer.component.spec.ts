import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLayerComponent } from './icon-layer.component';

describe('IconLayerComponent', () => {
  let component: IconLayerComponent;
  let fixture: ComponentFixture<IconLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
