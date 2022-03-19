import { Component, OnInit } from '@angular/core';

import { Cidade } from 'src/models/cidade';
import { CidadeService } from 'src/services/cidade.service';
import { PessoaService } from 'src/services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-criar',
  templateUrl: './pessoa-criar.component.html',
  styleUrls: ['./pessoa-criar.component.scss'],
})
export class PessoaCriarComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(
    private _router: Router,
    private _pessoaService: PessoaService,
    private _cidadeService: CidadeService
  ) {}

  async ngOnInit() {
    let result = await this._cidadeService.obterCidades().toPromise();
    this.cidades = result.cidades;
  }

  async onSubmit(value: any) {
    await this._pessoaService.criarPessoa(value).toPromise();
    this._router.navigateByUrl('/lists');
  }
}
