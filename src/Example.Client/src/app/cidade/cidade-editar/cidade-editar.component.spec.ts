import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeEditarComponent } from './cidade-editar.component';

describe('CidadeEditarComponent', () => {
  let component: CidadeEditarComponent;
  let fixture: ComponentFixture<CidadeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
