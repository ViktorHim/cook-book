import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCreatePageComponent } from './recipes-create-page.component';

describe('RecipesCreatePageComponent', () => {
  let component: RecipesCreatePageComponent;
  let fixture: ComponentFixture<RecipesCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesCreatePageComponent]
    });
    fixture = TestBed.createComponent(RecipesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
