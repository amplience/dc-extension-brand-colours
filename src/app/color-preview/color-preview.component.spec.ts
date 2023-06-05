import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorPreviewComponent } from './color-preview.component';

describe('ColorPreviewComponent', () => {
  let component: ColorPreviewComponent;
  let fixture: ComponentFixture<ColorPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
