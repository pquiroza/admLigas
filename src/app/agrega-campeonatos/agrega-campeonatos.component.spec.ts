import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaCampeonatosComponent } from './agrega-campeonatos.component';

describe('AgregaCampeonatosComponent', () => {
  let component: AgregaCampeonatosComponent;
  let fixture: ComponentFixture<AgregaCampeonatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaCampeonatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
