import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorVentasComponent } from './asesor-ventas.component';

describe('AsesorVentasComponent', () => {
  let component: AsesorVentasComponent;
  let fixture: ComponentFixture<AsesorVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
