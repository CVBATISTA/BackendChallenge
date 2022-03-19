import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cidade } from 'src/models/cidade';
import { CidadeService } from 'src/services/cidade.service';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.scss'],
})
export class PessoaEditarComponent implements OnInit {
  cidades: Cidade[] = [];
  pessoaId: number | null;
  pessoa!: Pessoa;

  constructor(
    private _router: Router,
    private _pessoaService: PessoaService,
    private _cidadeService: CidadeService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.pessoaId = this._activatedRoute.snapshot.paramMap.get('id') as
      | number
      | null;
  }

  async ngOnInit() {
    let result = await this._pessoaService
      .obterPessoaPorId(this.pessoaId as number)
      .toPromise();
    this.pessoa = result.pessoa;
    this.pessoa.id_cidade = result.pessoa.id_Cidade;
    console.log(this.pessoa);

    let result2 = await this._cidadeService.obterCidades().toPromise();
    this.cidades = result2.cidades;
  }

  async onSubmit(value: any) {
    await this._pessoaService
      .editarPessoa(this.pessoaId as number, value)
      .toPromise();
    this._router.navigateByUrl('/lists');
  }
}
