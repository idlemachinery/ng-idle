import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFeatureComponent } from './http-feature.component';

describe('HttpFeatureComponent', () => {
  let component: HttpFeatureComponent;
  let fixture: ComponentFixture<HttpFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
