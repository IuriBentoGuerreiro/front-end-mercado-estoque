import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaSalvarComponent } from './venda-salvar.component';

describe('VendaSalvarComponent', () => {
  let component: VendaSalvarComponent;
  let fixture: ComponentFixture<VendaSalvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendaSalvarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendaSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
