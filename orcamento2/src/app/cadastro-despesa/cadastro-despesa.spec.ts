import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstroDespesa } from './cadstro-despesa';

describe('CadstroDespesa', () => {
  let component: CadstroDespesa;
  let fixture: ComponentFixture<CadstroDespesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadstroDespesa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadstroDespesa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
