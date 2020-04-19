import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCampeonatoComponent } from './meta-campeonato.component';

describe('MetaCampeonatoComponent', () => {
  let component: MetaCampeonatoComponent;
  let fixture: ComponentFixture<MetaCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
