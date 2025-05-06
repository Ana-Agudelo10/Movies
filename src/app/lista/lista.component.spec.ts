import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { EnvioComponent } from '../envio/envio.component';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('EnvioComponent', () => {
  let component: EnvioComponent;
  let fixture: ComponentFixture<EnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
