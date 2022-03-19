import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cidade } from 'src/models/cidade';
import { CidadeService } from 'src/services/cidade.service';

@Component({
  selector: 'app-cidade-editar',
  templateUrl: './cidade-editar.component.html',
  styleUrls: ['./cidade-editar.component.scss'],
})
export class CidadeEditarComponent implements OnInit {
  cidade!: Cidade;
  cidadeId: number | null;

  constructor(
    private _cidadeService: CidadeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.cidadeId = this._activatedRoute.snapshot.paramMap.get('id') as
      | number
      | null;
  }

  async ngOnInit() {
    let result = await this._cidadeService
      .obterCidadePorId(this.cidadeId as number)
      .toPromise();
    this.cidade = result.cidade;
  }

  async onSubmit(value: any) {
    await this._cidadeService
      .editarCidade(this.cidadeId as number, value)
      .toPromise();
    this.voltar();
  }

  voltar() {
    this._router.navigateByUrl('/lists');
  }
}
