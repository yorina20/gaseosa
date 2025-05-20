import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaToolbarComponent } from './categoria-toolbar.component';

describe('CategoriaToolbarComponent', () => {
  let component: CategoriaToolbarComponent;
  let fixture: ComponentFixture<CategoriaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
