import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTestComponent } from './pipes-test.component';

describe('PipesTestComponent', () => {
  let component: PipesTestComponent;
  let fixture: ComponentFixture<PipesTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesTestComponent]
    });
    fixture = TestBed.createComponent(PipesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
