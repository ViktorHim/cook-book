import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsPageComponent } from './recipes-details-page.component';

describe('RecipesDetailsPageComponent', () => {
  let component: RecipesDetailsPageComponent;
  let fixture: ComponentFixture<RecipesDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesDetailsPageComponent]
    });
    fixture = TestBed.createComponent(RecipesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
