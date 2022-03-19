import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Cidade } from 'src/models/cidade';
import { CidadeService } from 'src/services/cidade.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa.service';
import { Router } from '@angular/router';
import { TableItem } from 'src/models/table-item';

enum SeletorLista {
  CIDADE = 0,
  PESSOA = 1,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  dataSource: any[] = []; // Fix any
  displayedColumns: string[] = [];
  colunasTabela: TableItem[] = [];
  selecionado: SeletorLista = SeletorLista.CIDADE;

  constructor(
    private _cidadeService: CidadeService,
    private _pessoaService: PessoaService,
    public _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.obterCidades();
  }

  adicionar() {
    switch (this.selecionado) {
      case SeletorLista.CIDADE:
        this._router.navigateByUrl('/cidade');
        break;
      case SeletorLista.PESSOA:
        this._router.navigateByUrl('/pessoa');
        break;
      default:
        break;
    }
  }

  async obterCidades() {
    let result = await this._cidadeService.obterCidades().toPromise();
    this.dataSource = result.cidades;
    this.displayedColumns = ['nome', 'uf', 'actions'];
    this.selecionado = SeletorLista.CIDADE;
  }

  async obterPessoas() {
    let result = await this._pessoaService.obterPessoas().toPromise();
    this.dataSource = result.pessoas;
    this.displayedColumns = ['nome', 'cpf', 'idade', 'actions'];
    this.selecionado = SeletorLista.PESSOA;
  }

  async editar(obj: Cidade | Pessoa) {
    let result;
    switch (this.selecionado) {
      case SeletorLista.CIDADE:
        this._router.navigateByUrl(`/cidade/${obj.id}`);
        // result = await this._cidadeService
        //   .editarCidade(obj as Cidade)
        //   .toPromise();
        this.obterCidades();
        break;
      case SeletorLista.PESSOA:
        this._router.navigateByUrl(`/pessoa/${obj.id}`);
        // result = await this._pessoaService
        //   .editarPessoa(obj as Pessoa)
        //   .toPromise();
        this.obterPessoas();
        break;
      default:
        break;
    }
  }

  async remover(obj: Cidade | Pessoa) {
    switch (this.selecionado) {
      case SeletorLista.CIDADE:
        await this._cidadeService.removerCidade(obj.id);
        this.obterCidades();
        break;
      case SeletorLista.PESSOA:
        await this._pessoaService.removerPessoa(obj.id);
        this.obterPessoas();
        break;
      default:
        break;
    }
    this._snackBar.open('Excluido', 'Fechar', {
      duration: 2000,
    });
  }
}
