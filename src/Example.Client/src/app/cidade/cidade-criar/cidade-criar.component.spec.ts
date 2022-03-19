import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeCriarComponent } from './cidade-criar.component';

describe('CidadeCriarComponent', () => {
  let component: CidadeCriarComponent;
  let fixture: ComponentFixture<CidadeCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
