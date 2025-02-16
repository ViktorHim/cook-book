import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesEditPageComponent } from './recipes-edit-page.component';

describe('RecipesEditPageComponent', () => {
  let component: RecipesEditPageComponent;
  let fixture: ComponentFixture<RecipesEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesEditPageComponent]
    });
    fixture = TestBed.createComponent(RecipesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
