import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProyectComponent } from './view-proyect.component';

describe('ViewProyectComponent', () => {
  let component: ViewProyectComponent;
  let fixture: ComponentFixture<ViewProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProyectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
