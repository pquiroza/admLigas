import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPosicionComponent } from './tabla-posicion.component';

describe('TablaPosicionComponent', () => {
  let component: TablaPosicionComponent;
  let fixture: ComponentFixture<TablaPosicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPosicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
