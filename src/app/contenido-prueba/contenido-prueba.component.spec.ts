import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPruebaComponent } from './contenido-prueba.component';

describe('ContenidoPruebaComponent', () => {
  let component: ContenidoPruebaComponent;
  let fixture: ComponentFixture<ContenidoPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
