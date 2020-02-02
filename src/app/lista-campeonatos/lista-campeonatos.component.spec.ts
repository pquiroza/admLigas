import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampeonatosComponent } from './lista-campeonatos.component';

describe('ListaCampeonatosComponent', () => {
  let component: ListaCampeonatosComponent;
  let fixture: ComponentFixture<ListaCampeonatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampeonatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
