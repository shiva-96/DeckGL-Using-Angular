import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLayerExampleComponent } from './icon-layer-example.component';

describe('IconLayerExampleComponent', () => {
  let component: IconLayerExampleComponent;
  let fixture: ComponentFixture<IconLayerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLayerExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLayerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
